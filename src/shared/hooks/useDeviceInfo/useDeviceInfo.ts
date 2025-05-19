import { useState, useEffect } from 'react';

const DEFAULT_MOBILE_BREAKPOINT = 900;
const DEFAULT_TABlET_BREAKPOINT = 1200;
const mobileQuery = `(max-width: ${DEFAULT_MOBILE_BREAKPOINT - 1}px)`;
const tabletQuery = `(max-width: ${DEFAULT_TABlET_BREAKPOINT - 1}px)`;

type UseDeviceInfoResult = {
    isMobile: boolean;
    isTablet: boolean;
};

export const useDeviceInfo = (): UseDeviceInfoResult => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const mediaQueryMobile = window.matchMedia(mobileQuery);
        const mediaQueryTablet = window.matchMedia(tabletQuery);
        const update = () => {
            setIsMobile(mediaQueryMobile.matches);
            setIsTablet(mediaQueryTablet.matches && !mediaQueryMobile.matches);
        };
        update();
        mediaQueryMobile.addEventListener('change', update);
        mediaQueryTablet.addEventListener('change', update);
        return () => {
            mediaQueryMobile.removeEventListener('change', update);
            mediaQueryTablet.removeEventListener('change', update);
        };
    }, []);

    return { isMobile, isTablet };
};
