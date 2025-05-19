import { FC, MouseEvent, ReactElement, ReactNode, useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Menu, MenuItem } from '@mui/joy';

type ContextMenuProps = {
    menuItems: {
        element: ReactElement;
        onClick?: (event: MouseEvent) => void;
    }[];
    children: (
        handleContextMenu: (event: MouseEvent) => void,
    ) => ReactNode | ReactNode[];
};

type ContextMenuState = null | {
    mouseX: number;
    mouseY: number;
};

export const ContextMenu: FC<ContextMenuProps> = ({
    menuItems,
    children,
}: ContextMenuProps) => {
    const [contextMenu, setContextMenu] = useState<ContextMenuState>(null);

    const handleClose = () => {
        setContextMenu(null);
    };

    const handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();
        setContextMenu({
            mouseX: event.clientX,
            mouseY: event.clientY,
        });
    };

    return (
        <>
            {children(handleContextMenu)}
            <ClickAwayListener onClickAway={handleClose}>
                <Menu
                    open={contextMenu !== null}
                    anchorEl={
                        contextMenu !== null
                            ? {
                                  getBoundingClientRect: () =>
                                      new DOMRect(
                                          contextMenu.mouseX,
                                          contextMenu.mouseY,
                                          0,
                                          0,
                                      ),
                              }
                            : undefined
                    }
                >
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item.element.key}
                            onClick={(event) => {
                                if (item.onClick) {
                                    item.onClick(event);
                                }
                                handleClose();
                            }}
                        >
                            {item.element}
                        </MenuItem>
                    ))}
                </Menu>
            </ClickAwayListener>
        </>
    );
};
