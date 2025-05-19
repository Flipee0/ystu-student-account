import { FC, useEffect, useState } from 'react';
import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Modal,
    ModalClose,
    ModalDialog,
    Option,
    Select,
    Stack,
    Textarea,
    Typography,
    useTheme,
} from '@mui/joy';
import { useTranslation } from 'react-i18next';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AppointmentTypes } from '@/features/CreateAppointment/contants/AppointmentTypes';

type CreateGenericAppointmentProps = {
    onSuccess?: (type: AppointmentTypes, text: string) => void;
};

export const CreateGenericAppointment: FC<CreateGenericAppointmentProps> = ({
    onSuccess,
}) => {
    const { t } = useTranslation();
    const theme = useTheme();

    const [modalOpen, setModalOpen] = useState(false);
    const [text, setText] = useState('');
    const [type, setType] = useState<AppointmentTypes | null>(null);
    const [typeError, setTypeError] = useState<string | undefined>(undefined);
    const [textError, setTextError] = useState<string | undefined>(undefined);

    useEffect(() => {
        setTypeError(undefined);
        setTextError(undefined);
    }, [text, type, modalOpen]);

    const handleSend = () => {
        if (!type || !text) {
            setTypeError(!type ? 'Required' : undefined);
            setTextError(!text ? 'Required' : undefined);
            return;
        }
        setModalOpen(false);
        setText('');
        setType(null);
        if (onSuccess) {
            onSuccess(type, text);
        }
    };

    return (
        <>
            <Button onClick={() => setModalOpen(true)}>
                {t('CreateRequisition')}
            </Button>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <ModalDialog
                    sx={{
                        minHeight: '50%',
                        [theme.breakpoints.down('sm')]: {
                            minWidth: '100%',
                        },
                    }}
                >
                    <ModalClose />
                    <Stack
                        spacing={2}
                        height="100%"
                        flexGrow="1"
                        justifyContent="space-between"
                    >
                        <Stack spacing={2}>
                            <Typography component="h4" level="h4">
                                {t('CreateRequisition')}
                            </Typography>
                            <FormControl error={!!typeError}>
                                <FormLabel>{t('ChooseRequisition')}</FormLabel>
                                <Select
                                    value={type}
                                    onChange={(_, value) => setType(value)}
                                >
                                    {Object.values(AppointmentTypes).map(
                                        (type) => (
                                            <Option
                                                key={type}
                                                value={type}
                                                sx={{
                                                    maxWidth: '100dvw',
                                                    textWrap: 'wrap',
                                                }}
                                            >
                                                {t(type)}
                                            </Option>
                                        ),
                                    )}
                                </Select>
                                {typeError && (
                                    <FormHelperText>
                                        <InfoOutlinedIcon />
                                        {t(typeError)}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            {type && (
                                <FormControl error={!!textError}>
                                    <FormLabel>{t(`${type}Caption`)}</FormLabel>
                                    <Textarea
                                        value={text}
                                        onChange={(event) =>
                                            setText(event.target.value)
                                        }
                                        minRows={2}
                                        maxRows={4}
                                    />
                                    {textError && (
                                        <FormHelperText>
                                            <InfoOutlinedIcon />
                                            {t(textError)}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            )}
                        </Stack>
                        <Button onClick={handleSend}>{t('Send')}</Button>
                    </Stack>
                </ModalDialog>
            </Modal>
        </>
    );
};
