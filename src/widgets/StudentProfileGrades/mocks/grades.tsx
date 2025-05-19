import { TableConfig } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const useGradesMock = (): TableConfig<{
    id: string;
    educationYear: string;
    semester: string;
    subject: string;
    controlType: string;
    creditUnits: string;
    score: string;
    grade: string;
}> => {
    const { t } = useTranslation();

    return {
        headersKeys: {
            educationYear: 'EducationYear',
            semester: 'Semester',
            subject: 'Subject',
            controlType: 'ControlType',
            creditUnits: 'CreditUnits',
            score: 'Score',
            grade: 'Grade',
        },
        lines: [
            {
                id: '1',
                educationYear: '1',
                semester: '1',
                subject: 'Введение в современные информационные технологии',
                controlType: t('DifferentiatedCredit'),
                creditUnits: '4',
                score: '5',
                grade: t('Excellent'),
            },
            {
                id: '2',
                educationYear: '1',
                semester: '2',
                subject: 'Иностранный язык',
                controlType: t('Credit'),
                creditUnits: '3',
                score: '',
                grade: t('Credit'),
            },
            {
                id: '3',
                educationYear: '2',
                semester: '4',
                subject: 'Инфокоммуникационные системы и сети',
                controlType: t('DifferentiatedCredit'),
                creditUnits: '4',
                score: '3',
                grade: t('Pass'),
            },
            {
                id: '4',
                educationYear: '3',
                semester: '5',
                subject: 'Моделирование систем',
                controlType: t('Exam'),
                creditUnits: '3',
                score: '4',
                grade: t('Good'),
            },
        ],
    };
};
