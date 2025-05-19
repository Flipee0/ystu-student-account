import { FC, ReactNode, useState } from 'react';
import { Modal, ModalDialog } from '@mui/joy';

export type ButtonWithModalProps = {
    onAction: () => void;
    button: (openCallback: () => void) => ReactNode;
    children: (
        closeCallback: () => void,
        performActionCallback: () => void,
    ) => ReactNode | ReactNode[];
};

export const ButtonWithModal: FC<ButtonWithModalProps> = ({
    onAction,
    button,
    children,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openCallback = () => {
        setIsModalOpen(true);
    };

    const closeCallback = () => {
        setIsModalOpen(false);
    };

    const performActionCallback = () => {
        closeCallback();
        onAction();
    };

    return (
        <>
            {button(openCallback)}
            <Modal open={isModalOpen} onClose={closeCallback}>
                <ModalDialog variant="outlined">
                    {children(closeCallback, performActionCallback)}
                </ModalDialog>
            </Modal>
        </>
    );
};
