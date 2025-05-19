import { FC } from 'react';
import { SuspenseLoader } from '@/app/providers/SuspenseLoader';
import { Stack, Typography } from '@mui/joy';

type FullSizeLoaderProps = {
    title?: string;
};

export const FullSizeLoader: FC<FullSizeLoaderProps> = ({ title }) => {
    return (
        <Stack
            flexGrow="1"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
        >
            {title && <Typography>{title}</Typography>}
            <SuspenseLoader />
        </Stack>
    );
};
