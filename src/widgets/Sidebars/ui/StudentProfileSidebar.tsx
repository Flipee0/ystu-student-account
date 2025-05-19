import { type FC, type PropsWithChildren } from 'react';
import { Sidebar, SidebarWithIcons } from '@/entities/Sidebar';
import { sidebarItems } from '@/widgets/Sidebars/constants/sidebarItems';

export const StudentProfileSidebar: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Sidebar pageContent={children}>
            <SidebarWithIcons items={sidebarItems} />
        </Sidebar>
    );
};
