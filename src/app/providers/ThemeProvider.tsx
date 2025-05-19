import { CssVarsProvider } from '@mui/joy/styles';
import type { FC, PropsWithChildren } from 'react';
import { CssBaseline, extendTheme } from '@mui/joy';
import { Global } from '@emotion/react';
import dinProFont from '@/shared/fonts/din-pro';

const theme = extendTheme({
    fontFamily: {
        body: 'DIN Pro, sans-serif',
        display: 'DIN Pro, sans-serif',
    },
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <CssVarsProvider modeStorageKey="AppColorMode" theme={theme}>
            <Global styles={dinProFont} />
            <CssBaseline />
            {children}
        </CssVarsProvider>
    );
};
