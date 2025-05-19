import { FC } from 'react';
import { Button, IconButton } from '@mui/joy';
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonWithConfirmation } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

type DeleteButtonProps = {
    onDelete: () => void;
    object?: string;
    showTextOnButton?: boolean;
};

export const DeleteButton: FC<DeleteButtonProps> = ({
    onDelete,
    object,
    showTextOnButton,
}) => {
    const { t } = useTranslation();

    return (
        <ButtonWithConfirmation
            onConfirm={onDelete}
            title={t('DeleteConfirmationTitle')}
            message={t('DeleteConfirmationMessage', {
                object: object ?? t('Object').toLowerCase(),
            })}
            button={(openCallback) =>
                showTextOnButton ? (
                    <Button
                        color="danger"
                        onClick={openCallback}
                        endDecorator={<DeleteIcon />}
                    >
                        t('Delete')
                    </Button>
                ) : (
                    <IconButton color="danger" onClick={openCallback}>
                        <DeleteIcon />
                    </IconButton>
                )
            }
            performActionButton={(performActionCallback) => (
                <Button
                    variant="solid"
                    color="danger"
                    onClick={performActionCallback}
                    endDecorator={<DeleteIcon />}
                >
                    {t('Delete')}
                </Button>
            )}
        />
    );
};
