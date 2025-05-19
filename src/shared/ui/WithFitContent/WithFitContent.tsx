import { FC, PropsWithChildren } from 'react';
import { Stack } from '@mui/joy';

export const WithFitContent: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Stack maxWidth="60rem" width="100%" alignSelf="center">
            {children}
        </Stack>
    );
};
