import { SidebarWithIconsItem } from '@/entities/Sidebar';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import ChecklistIcon from '@mui/icons-material/Checklist';
import GradeIcon from '@mui/icons-material/Grade';
import WorkIcon from '@mui/icons-material/Work';
import FeedIcon from '@mui/icons-material/Feed';
import { StudentProfileRoute } from '@/shared/constants';

export const sidebarItems: SidebarWithIconsItem[] = [
    {
        labelKey: 'GeneralInformation',
        icon: <InfoOutlineIcon />,
        url: StudentProfileRoute.GeneralInformation,
    },
    {
        labelKey: 'Curriculum',
        icon: <ChecklistIcon />,
        url: StudentProfileRoute.Curriculum,
    },
    {
        labelKey: 'Grades',
        icon: <GradeIcon />,
        url: StudentProfileRoute.Grades,
    },
    {
        labelKey: 'Portfolio',
        icon: <WorkIcon />,
        url: StudentProfileRoute.Portfolio,
    },
    {
        labelKey: 'MyRequisitions',
        icon: <FeedIcon />,
        url: StudentProfileRoute.MyRequisitions,
    },
];
