import { FC, useMemo } from 'react';
import { List, ListItem, ListItemButton, ListItemDecorator } from '@mui/joy';
import { useTranslation } from 'react-i18next';
import { SidebarWithIconsItem } from '@/entities/Sidebar';
import { PureLink } from '@/shared/ui';

type SidebarWithIconsProps = {
    items: SidebarWithIconsItem[];
};

export const SidebarWithIcons: FC<SidebarWithIconsProps> = ({ items }) => {
    const { t } = useTranslation();

    const activeMenuItem = useMemo(() => {
        return items.find((item) =>
            window.location.pathname.startsWith(item.url),
        );
    }, [items]);

    return (
        <List>
            {items.map((item) => (
                <ListItem key={item.url}>
                    <PureLink to={item.url}>
                        <ListItemButton
                            color={
                                item === activeMenuItem ? 'primary' : 'neutral'
                            }
                            sx={{ borderRadius: '10px' }}
                        >
                            <ListItemDecorator>{item.icon}</ListItemDecorator>
                            {t(item.labelKey)}
                        </ListItemButton>
                    </PureLink>
                </ListItem>
            ))}
        </List>
    );
};
