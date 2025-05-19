import { FC } from 'react';
import { TableFromConfig } from '@/shared/ui';
import { Stack, Typography } from '@mui/joy';
import { useTranslation } from 'react-i18next';
import { useGradesMock } from '@/widgets/StudentProfileGrades/mocks/grades';

type StudentProfileGradesWidgetProps = {};

export const StudentProfileGradesWidget: FC<
    StudentProfileGradesWidgetProps
> = () => {
    const { t } = useTranslation();
    const grades = useGradesMock();

    return (
        <Stack spacing={2}>
            <Typography component="h3" level="h3">
                {t('Grades')}
            </Typography>
            <TableFromConfig config={grades} />
        </Stack>
    );
};
