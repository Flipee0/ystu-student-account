import { MenuItem } from '@/widgets/Layout/models/menuItem';
import SchoolIcon from '@mui/icons-material/School';
import { Route } from '@/shared/constants';

export const menuItems: MenuItem[] = [
    {
        labelKey: 'StudentProfile',
        icon: <SchoolIcon />,
        url: Route.StudentProfile,
    },
];
