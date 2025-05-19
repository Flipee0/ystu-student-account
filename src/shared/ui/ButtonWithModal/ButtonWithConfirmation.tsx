import { FC, ReactNode } from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
} from '@mui/joy';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import ClearIcon from '@mui/icons-material/Clear';
import {
    ButtonWithModal,
    ButtonWithModalProps,
} from '@/shared/ui/ButtonWithModal/ButtonWithModal';
import { useTranslation } from 'react-i18next';

type ButtonWithConfirmationProps = {
    onConfirm: () => void;
    title?: string;
    message?: string;
    performActionButton: (performActionCallback: () => void) => ReactNode;
} & Pick<ButtonWithModalProps, 'button'>;

export const ButtonWithConfirmation: FC<ButtonWithConfirmationProps> = ({
    onConfirm,
    title,
    message,
    performActionButton,
    button,
}) => {
    const { t } = useTranslation();

    return (
        <ButtonWithModal onAction={onConfirm} button={button}>
            {(closeCallback, performActionCallback) => (
                <>
                    <DialogTitle>
                        <WarningRoundedIcon />
                        {title ?? t('ConfirmationTitle')}
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        {message ?? t('ConfirmationMessage')}
                    </DialogContent>
                    <DialogActions>
                        {performActionButton(performActionCallback)}
                        <Button
                            variant="plain"
                            color="neutral"
                            onClick={closeCallback}
                            endDecorator={<ClearIcon />}
                        >
                            {t('Cancel')}
                        </Button>
                    </DialogActions>
                </>
            )}
        </ButtonWithModal>
    );
};
