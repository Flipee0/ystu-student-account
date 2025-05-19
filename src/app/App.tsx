import { composeComponents } from '@/shared/utils';
import { Router } from '@/page';
import { Providers } from '@/app/providers';

const AppComponent = () => {
    return <Router />;
};

export const App = composeComponents(AppComponent, Providers);
