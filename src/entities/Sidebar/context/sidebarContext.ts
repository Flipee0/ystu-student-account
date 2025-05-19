import { createContext, Dispatch, SetStateAction } from 'react';

type SidebarContextType = {
    sidebarExpanded: boolean;
    setSidebarExpanded: Dispatch<SetStateAction<boolean>>;
    renderSidebar: boolean;
    setRenderSidebar: Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextType>({
    sidebarExpanded: false,
    setSidebarExpanded: () => {},
    renderSidebar: false,
    setRenderSidebar: () => {},
});
