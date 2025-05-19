import { FC } from 'react';
import { TableFromConfig } from '@/shared/ui';
import { curriculumMock } from '@/widgets/StudentProfileCurriculum/mocks/curriculum';
import { Stack, Typography } from '@mui/joy';
import { useTranslation } from 'react-i18next';

type StudentProfileCurriculumWidgetProps = {};

export const StudentProfileCurriculumWidget: FC<
    StudentProfileCurriculumWidgetProps
> = () => {
    const { t } = useTranslation();

    return (
        <Stack spacing={2}>
            <Typography component="h3" level="h3">
                {t('Curriculum')}
            </Typography>
            <TableFromConfig config={curriculumMock} />
        </Stack>
    );
};
