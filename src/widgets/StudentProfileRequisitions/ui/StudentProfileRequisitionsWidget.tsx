import { FC } from 'react';
import { TableFromConfig } from '@/shared/ui';
import { Stack, Typography } from '@mui/joy';
import { useTranslation } from 'react-i18next';
import { useRequisitionsMock } from '@/widgets/StudentProfileRequisitions/mocks/requisitions';
import { useAppointmentsMock } from '@/widgets/StudentProfileRequisitions/mocks/appointments';
import { CreateGenericRequisition } from '@/features/CreateRequisition';
import { CreateGenericAppointment } from '@/features/CreateAppointment';

type StudentProfilePortfolioWidgetProps = {};

export const StudentProfileRequisitionsWidget: FC<
    StudentProfilePortfolioWidgetProps
> = () => {
    const { t } = useTranslation();
    const { requisitions, addRequisition } = useRequisitionsMock();
    const { appointments, addAppointment } = useAppointmentsMock();

    return (
        <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
                <Typography component="h3" level="h3">
                    {t('MyRequisitions')}
                </Typography>
                <CreateGenericRequisition onSuccess={addRequisition} />
            </Stack>
            <TableFromConfig config={requisitions} />
            <Stack direction="row" justifyContent="space-between">
                <Typography component="h3" level="h3">
                    {t('AppointmentForServices')}
                </Typography>
                <CreateGenericAppointment onSuccess={addAppointment} />
            </Stack>
            <TableFromConfig config={appointments} />
        </Stack>
    );
};
