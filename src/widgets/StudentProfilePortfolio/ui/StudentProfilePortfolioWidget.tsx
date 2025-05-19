import { FC } from 'react';
import { TableFromConfig } from '@/shared/ui';
import { Stack, Typography } from '@mui/joy';
import { useTranslation } from 'react-i18next';
import { usePortfolioMock } from '@/widgets/StudentProfilePortfolio/mocks/portfolio';

type StudentProfilePortfolioWidgetProps = {};

export const StudentProfilePortfolioWidget: FC<
    StudentProfilePortfolioWidgetProps
> = () => {
    const { t } = useTranslation();
    const portfolio = usePortfolioMock();

    return (
        <Stack spacing={2}>
            <Typography component="h3" level="h3">
                {t('Portfolio')}
            </Typography>
            <TableFromConfig config={portfolio} />
        </Stack>
    );
};
