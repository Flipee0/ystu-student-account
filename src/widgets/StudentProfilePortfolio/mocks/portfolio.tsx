import { Attachment, TableConfig } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';

export const usePortfolioMock = (): TableConfig<{
    id: string;
    date: string;
    type: string;
    name: string;
    file: ReactNode;
}> => {
    const { t } = useTranslation();

    return {
        headersKeys: {
            date: 'Date',
            type: 'Type',
            name: 'Name',
            file: 'File',
        },
        lines: [
            {
                id: '1',
                date: '16.04.2022',
                type: t('Other'),
                name: t('InvoiceForHostelFees'),
                file: <Attachment url="" />,
            },
            {
                id: '2',
                date: '15.05.2022',
                type: t('Other'),
                name: t('InvoiceForHostelFees'),
                file: <Attachment url="" />,
            },
            {
                id: '3',
                date: '20.06.2022',
                type: t('Other'),
                name: t('InvoiceForHostelFees'),
                file: <Attachment url="" />,
            },
            {
                id: '4',
                date: '25.07.2022',
                type: t('Other'),
                name: t('InvoiceForHostelFees'),
                file: <Attachment url="" />,
            },
        ],
    };
};
