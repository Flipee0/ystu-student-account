import { FC, ReactNode, useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Drawer, IconButton, Stack, Typography } from '@mui/joy';
import { useTranslation } from 'react-i18next';

type DrawerFiltersProps = {
    active: boolean;
    onClose?: () => void;
    children: ReactNode | ReactNode[];
};

export const DrawerFilters: FC<DrawerFiltersProps> = ({
    active,
    onClose,
    children,
}) => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
        setOpen(false);
    };

    return (
        <>
            <IconButton
                color={active ? 'primary' : 'neutral'}
                onClick={() => setOpen(true)}
            >
                <FilterAltIcon />
            </IconButton>
            <Drawer open={open} onClose={handleClose} anchor="right">
                <Stack padding={2} spacing={2}>
                    <Typography textAlign="center" level={'title-lg'}>
                        {t('Filters')}
                    </Typography>
                    {children}
                </Stack>
            </Drawer>
        </>
    );
};
