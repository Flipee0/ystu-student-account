import { FC, PropsWithChildren, ReactNode, use, useEffect } from 'react';
import { Box, Drawer, IconButton, Stack } from '@mui/joy';
import { SidebarContext } from '@/entities/Sidebar';
import { useDeviceInfo } from '@/shared/hooks';
import MenuIcon from '@mui/icons-material/Menu';

type SidebarProps = {
    pageContent: ReactNode;
} & PropsWithChildren;

export const Sidebar: FC<SidebarProps> = ({ children, pageContent }) => {
    const { sidebarExpanded, setSidebarExpanded, setRenderSidebar } =
        use(SidebarContext);
    const { isMobile } = useDeviceInfo();

    const sidebarContent = (
        <Box
            sx={{ overflowY: 'auto' }}
            minWidth="min-content"
            textAlign="left"
            pl={2}
            py={1}
        >
            {isMobile && (
                <IconButton onClick={() => setSidebarExpanded(false)}>
                    <MenuIcon />
                </IconButton>
            )}
            {children}
        </Box>
    );

    useEffect(() => {
        setRenderSidebar(true);
        return () => {
            setRenderSidebar(false);
        };
    }, [setRenderSidebar]);

    return (
        <Stack
            direction="row"
            height="calc(100dvh - 68px)"
            maxWidth="100dvw"
            gap={2}
        >
            {isMobile ? (
                <Drawer open={sidebarExpanded}>{sidebarContent}</Drawer>
            ) : (
                sidebarContent
            )}
            <Box
                sx={{
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                py={1}
                width="100%"
                height="100%"
                paddingBottom="44px"
            >
                <Box maxWidth="min(100rem, 100%)">{pageContent}</Box>
            </Box>
        </Stack>
    );
};
