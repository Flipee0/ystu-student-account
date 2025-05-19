import { FC, PropsWithChildren, Suspense } from 'react';

export const SuspenseLoader: FC<PropsWithChildren> = ({ children }) => {
    return <Suspense fallback={<div></div>}>{children}</Suspense>;
};
