import type { FC } from 'react';
import { composeComponents } from '@/shared/utils';
import { Layout } from '@/widgets/Layout';
import { StudentProfileSidebar } from '@/widgets/Sidebars';
import { StudentProfileCurriculumWidget } from '@/widgets/StudentProfileCurriculum';

const StudentProfileCurriculum: FC = () => {
    return <StudentProfileCurriculumWidget />;
};

export const StudentProfileCurriculumPage = composeComponents(
    StudentProfileCurriculum,
    StudentProfileSidebar,
    Layout,
);
