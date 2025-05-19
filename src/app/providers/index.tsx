import { composeComponents } from '@/shared/utils';
import { ThemeProvider } from './ThemeProvider';
import { SuspenseLoader } from '@/app/providers/SuspenseLoader';

export const Providers = composeComponents(ThemeProvider, SuspenseLoader);
