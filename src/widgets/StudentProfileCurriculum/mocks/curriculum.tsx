import { TableConfig } from '@/shared/ui';
import { Attachment } from '@/shared/ui';
import { ReactNode } from 'react';

export const curriculumMock: TableConfig<{
    id: string;
    discipline: string;
    department: string;
    workProgramUrl: ReactNode;
    literatureUrl: ReactNode;
    federalEducationalStandardUrl: ReactNode;
    signaturesFederalEducationalStandardUrl: ReactNode;
    author: string;
}> = {
    headersKeys: {
        discipline: 'Discipline',
        department: 'Department',
        workProgramUrl: 'WorkProgram',
        literatureUrl: 'Literature',
        federalEducationalStandardUrl: 'FederalEducationalStandard',
        signaturesFederalEducationalStandardUrl:
            'SignaturesFederalEducationalStandard',
        author: 'Author',
    },
    lines: [
        {
            id: '1',
            discipline: 'CRM-системы',
            department: 'ИСТ',
            workProgramUrl: <Attachment url="" />,
            literatureUrl: <Attachment url="" />,
            federalEducationalStandardUrl: <Attachment url="" />,
            signaturesFederalEducationalStandardUrl: <Attachment url="" />,
            author: 'Бахаева Д.Д.',
        },
        {
            id: '2',
            discipline: 'Web - технологии',
            department: 'ИСТ',
            workProgramUrl: <Attachment url="" />,
            literatureUrl: <Attachment url="" />,
            federalEducationalStandardUrl: <Attachment url="" />,
            signaturesFederalEducationalStandardUrl: <Attachment url="" />,
            author: 'Кузин А.В.',
        },
        {
            id: '3',
            discipline: 'Администрирование информационных систем (рус)',
            department: 'ИСТ',
            workProgramUrl: <Attachment url="" />,
            literatureUrl: <Attachment url="" />,
            federalEducationalStandardUrl: <Attachment url="" />,
            signaturesFederalEducationalStandardUrl: <Attachment url="" />,
            author: 'Александрова Е.В.',
        },
        {
            id: '4',
            discipline: 'Архитектура информационных систем',
            department: 'ИСТ',
            workProgramUrl: <Attachment url="" />,
            literatureUrl: <Attachment url="" />,
            federalEducationalStandardUrl: <Attachment url="" />,
            signaturesFederalEducationalStandardUrl: <Attachment url="" />,
            author: 'Царев Ю.В.',
        },
    ],
};
