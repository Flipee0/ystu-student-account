import { type FC, useMemo } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from 'react-router-dom';
import { StudentProfileRoute } from '@/shared/constants';

export const Router: FC = () => {
    const router = useMemo(
        () =>
            createBrowserRouter([
                {
                    path: StudentProfileRoute.GeneralInformation,
                    lazy: () => import('./StudentProfileGeneralInfo'),
                    hydrateFallbackElement: <div />,
                },
                {
                    path: StudentProfileRoute.Curriculum,
                    lazy: () => import('./StudentProfileCurriculum'),
                    hydrateFallbackElement: <div />,
                },
                {
                    path: StudentProfileRoute.Grades,
                    lazy: () => import('./StudentProfileGrades'),
                    hydrateFallbackElement: <div />,
                },
                {
                    path: StudentProfileRoute.Portfolio,
                    lazy: () => import('./StudentProfilePortfolio'),
                    hydrateFallbackElement: <div />,
                },
                {
                    path: StudentProfileRoute.MyRequisitions,
                    lazy: () => import('./StudentProfileMyRequisitions'),
                    hydrateFallbackElement: <div />,
                },
                {
                    path: '*',
                    element: (
                        <Navigate to={StudentProfileRoute.GeneralInformation} />
                    ),
                    hydrateFallbackElement: <div />,
                },
            ]),
        [],
    );

    return <RouterProvider router={router} />;
};
