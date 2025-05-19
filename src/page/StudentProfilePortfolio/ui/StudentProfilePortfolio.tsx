import type { FC } from 'react';
import { composeComponents } from '@/shared/utils';
import { Layout } from '@/widgets/Layout';
import { StudentProfileSidebar } from '@/widgets/Sidebars';
import { StudentProfilePortfolioWidget } from '@/widgets/StudentProfilePortfolio';

const StudentProfilePortfolio: FC = () => {
    return <StudentProfilePortfolioWidget />;
};

export const StudentProfilePortfolioPage = composeComponents(
    StudentProfilePortfolio,
    StudentProfileSidebar,
    Layout,
);
