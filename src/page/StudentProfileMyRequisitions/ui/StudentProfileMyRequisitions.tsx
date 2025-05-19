import type { FC } from 'react';
import { composeComponents } from '@/shared/utils';
import { Layout } from '@/widgets/Layout';
import { StudentProfileSidebar } from '@/widgets/Sidebars';
import { StudentProfileRequisitionsWidget } from '@/widgets/StudentProfileRequisitions';

const StudentProfileMyRequisitions: FC = () => {
    return <StudentProfileRequisitionsWidget />;
};

export const StudentProfileMyRequisitionsPage = composeComponents(
    StudentProfileMyRequisitions,
    StudentProfileSidebar,
    Layout,
);
