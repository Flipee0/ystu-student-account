import type { FC, PropsWithChildren } from 'react';
import { Stack } from '@mui/joy';
import { AppBar } from '@/widgets/Layout/ui/AppBar';
import { menuItems } from '@/widgets/Layout/constants/menuItems';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Stack>
            <AppBar menuItems={menuItems}>{children}</AppBar>
        </Stack>
    );
};
