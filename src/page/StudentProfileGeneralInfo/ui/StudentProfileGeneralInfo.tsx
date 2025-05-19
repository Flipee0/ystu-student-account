import type { FC } from 'react';
import { composeComponents } from '@/shared/utils';
import { Layout } from '@/widgets/Layout';
import { StudentProfileSidebar } from '@/widgets/Sidebars';
import { StudentProfile } from '@/widgets/StudentProfile';

const StudentProfileGeneralInfo: FC = () => {
    return <StudentProfile />;
};

export const StudentProfileGeneralInfoPage = composeComponents(
    StudentProfileGeneralInfo,
    StudentProfileSidebar,
    Layout,
);
