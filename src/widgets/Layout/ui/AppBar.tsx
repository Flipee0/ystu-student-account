import {
    Fragment,
    type FC,
    type ReactNode,
    useEffect,
    useState,
    useMemo,
} from 'react';
import {
    Box,
    Button,
    IconButton,
    List,
    ListDivider,
    ListItem,
    ListItemButton,
    ListItemDecorator,
    Stack,
    Typography,
    useTheme,
} from '@mui/joy';
import { ColorModeSwitch } from '@/features/ColorModeSwitch';
import { LangPicker } from '@/features/LangPicker';
import { Logo } from '@/entities/Logo';
import { PureLink } from '@/shared/ui';
import { Route } from '@/shared/constants';
import { useDeviceInfo } from '@/shared/hooks';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '@/widgets/Layout/models/menuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { SidebarContext } from '@/entities/Sidebar';

type AppBarProps = {
    menuItems: MenuItem[];
    children: ReactNode | ReactNode[];
};

export const AppBar: FC<AppBarProps> = ({ menuItems, children }) => {
    const theme = useTheme();
    const { isMobile, isTablet } = useDeviceInfo();
    const { t } = useTranslation();
    const [sidebarExpanded, setSidebarExpanded] = useState(!isMobile);
    const [renderSidebar, setRenderSidebar] = useState(false);

    useEffect(() => {
        if (!isMobile) {
            setSidebarExpanded(true);
        } else {
            setSidebarExpanded(false);
        }
    }, [isMobile, setSidebarExpanded]);

    const handleSidebarToggle = () => {
        if (isMobile) {
            setSidebarExpanded((prev) => !prev);
        }
    };

    const activeMenuItem = useMemo(() => {
        return (
            menuItems
                .slice(1)
                .find((item) =>
                    window.location.pathname.startsWith(item.url),
                ) ?? menuItems[0]
        );
    }, [menuItems]);

    return (
        <SidebarContext
            value={{
                sidebarExpanded,
                setSidebarExpanded,
                renderSidebar,
                setRenderSidebar,
            }}
        >
            <Stack height="100dvh">
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                    padding={2}
                    position="sticky"
                    top="0"
                    sx={{
                        bgcolor: theme.palette.background,
                        backdropFilter: 'blur(5px)',
                        zIndex: 1000,
                    }}
                >
                    <Stack direction="row" spacing={2} alignItems="center">
                        {isMobile && renderSidebar && (
                            <IconButton onClick={handleSidebarToggle}>
                                <MenuIcon />
                            </IconButton>
                        )}
                        <PureLink to={Route.Main}>
                            <Typography
                                level="title-lg"
                                startDecorator={<Logo height="2.2rem" />}
                            >
                                {isMobile ? '' : t('CorporatePortal')}
                            </Typography>
                        </PureLink>
                        {!isMobile && (
                            <List orientation="horizontal">
                                {menuItems.map((item) => (
                                    <ListItem key={item.url}>
                                        <PureLink to={item.url}>
                                            <ListItemButton
                                                color={
                                                    activeMenuItem === item
                                                        ? 'primary'
                                                        : 'neutral'
                                                }
                                                sx={{ borderRadius: '10px' }}
                                            >
                                                <ListItemDecorator>
                                                    {item.icon}
                                                </ListItemDecorator>
                                                {!isTablet && t(item.labelKey)}
                                            </ListItemButton>
                                        </PureLink>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <ColorModeSwitch />
                        <LangPicker />
                        <Button variant="outlined" color="neutral">
                            Выйти
                        </Button>
                    </Stack>
                </Stack>
                <Box px={2} minHeight="calc(100dvh - 68px)">
                    {children}
                </Box>
                <Stack
                    position="fixed"
                    width="100%"
                    direction="row"
                    bottom="0"
                    sx={{
                        bgcolor: theme.palette.background.body,
                        zIndex: 1000,
                    }}
                >
                    {isMobile && (
                        <List
                            orientation="horizontal"
                            size="lg"
                            sx={{
                                justifyContent: 'space-between',
                            }}
                        >
                            {menuItems.map((item, index) => (
                                <Fragment key={item.url}>
                                    <ListItem
                                        sx={{
                                            flexGrow: 1,
                                        }}
                                    >
                                        <ListItemButton
                                            color={
                                                activeMenuItem === item
                                                    ? 'primary'
                                                    : 'neutral'
                                            }
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                borderRadius: '10px',
                                            }}
                                        >
                                            <PureLink
                                                to={item.url}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                {item.icon}
                                            </PureLink>
                                        </ListItemButton>
                                    </ListItem>
                                    {index !== menuItems.length - 1 && (
                                        <ListDivider />
                                    )}
                                </Fragment>
                            ))}
                        </List>
                    )}
                </Stack>
            </Stack>
        </SidebarContext>
    );
};
