import { TableConfig } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const useAppointmentsMock = () => {
    const { t, i18n } = useTranslation();
    const [appointments, setAppointments] = useState<
        TableConfig<{
            id: string;
            date: string;
            type: string;
            department: string;
        }>
    >({
        headersKeys: {
            date: 'Date',
            type: 'Type',
            department: 'Department',
        },
        lines: [
            {
                id: '1',
                date: '12.09.2024',
                type: t('BookDrop'),
                department: t('Library'),
            },
            {
                id: '2',
                date: '12.09.2024',
                type: t('BookDrop'),
                department: t('Library'),
            },
        ],
    });

    const addAppointment = (type: string) => {
        setAppointments((prev) => ({
            ...prev,
            lines: [
                ...prev.lines,
                {
                    id: Number.parseInt(
                        prev.lines[prev.lines.length - 1].id,
                        10,
                    ).toString(),
                    date: new Date().toLocaleString(i18n.language, {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    }),
                    type: t(type),
                    department: t('G104'),
                },
            ],
        }));
    };

    return { appointments, addAppointment };
};
