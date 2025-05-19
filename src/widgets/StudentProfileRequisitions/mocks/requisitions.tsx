import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/joy';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from 'react';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import DoneIcon from '@mui/icons-material/Done';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export const useRequisitionsMock = () => {
    const { t, i18n } = useTranslation();
    const [requisitions, setRequisitions] = useState({
        headersKeys: {
            date: 'Date',
            type: 'Type',
            department: 'Department',
            status: 'Status',
        },
        lines: [
            {
                id: '1',
                date: '12.09.2024',
                type: t('ProofOfEducation'),
                department: t('G104'),
                status: (
                    <Typography startDecorator={<AccessTimeIcon />}>
                        {t('InProcess')}
                    </Typography>
                ),
            },
            {
                id: '2',
                date: '12.09.2024',
                type: t('PartTimeSession'),
                department: t('G104'),
                status: (
                    <Typography startDecorator={<InsertDriveFileIcon />}>
                        {t('OfflineReceipt')}
                    </Typography>
                ),
            },
            {
                id: '3',
                date: '12.09.2024',
                type: t('Scholarship'),
                department: t('G104'),
                status: (
                    <Typography startDecorator={<CloudDoneIcon />}>
                        {t('OnlineReceipt')}
                    </Typography>
                ),
            },
            {
                id: '4',
                date: '12.09.2024',
                type: t('HostedAdmission'),
                department: t('G104'),
                status: (
                    <Typography startDecorator={<DoneIcon />}>
                        {t('Closed')}
                    </Typography>
                ),
            },
            {
                id: '5',
                date: '12.09.2024',
                type: t('HostelResidence'),
                department: t('G104'),
                status: (
                    <Typography startDecorator={<AccessTimeIcon />}>
                        {t('InProcess')}
                    </Typography>
                ),
            },
            {
                id: '6',
                date: '12.09.2024',
                type: t('HostelLeave'),
                department: t('G104'),
                status: (
                    <Typography startDecorator={<AccessTimeIcon />}>
                        {t('InProcess')}
                    </Typography>
                ),
            },
            {
                id: '7',
                date: '12.09.2024',
                type: t('HostelReturn'),
                department: t('G104'),
                status: (
                    <Typography startDecorator={<AccessTimeIcon />}>
                        {t('InProcess')}
                    </Typography>
                ),
            },
            {
                id: '8',
                date: '12.09.2024',
                type: t('PreviousEducation'),
                department: t('G104'),
                status: (
                    <Typography startDecorator={<AccessTimeIcon />}>
                        {t('InProcess')}
                    </Typography>
                ),
            },
            {
                id: '9',
                date: '12.09.2024',
                type: t('Parking'),
                department: t('G104'),
                status: (
                    <Typography startDecorator={<AccessTimeIcon />}>
                        {t('InProcess')}
                    </Typography>
                ),
            },
        ],
    });

    const addRequisition = (type: string) => {
        setRequisitions((prev) => ({
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
                    status: (
                        <Typography startDecorator={<AccessTimeIcon />}>
                            {t('InProcess')}
                        </Typography>
                    ),
                },
            ],
        }));
    };

    return { requisitions, addRequisition };
};
