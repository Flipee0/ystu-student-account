import type { FC } from 'react';
import { composeComponents } from '@/shared/utils';
import { Layout } from '@/widgets/Layout';
import { StudentProfileSidebar } from '@/widgets/Sidebars';
import { StudentProfileGradesWidget } from '@/widgets/StudentProfileGrades';

const StudentProfileGrades: FC = () => {
    return <StudentProfileGradesWidget />;
};

export const StudentProfileGradesPage = composeComponents(
    StudentProfileGrades,
    StudentProfileSidebar,
    Layout,
);
