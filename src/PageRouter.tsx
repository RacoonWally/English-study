import React from 'react';
import { RouteProps } from 'react-router';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { App } from './App.tsx';
import { MainPage } from '@pages/MainPage/MainPage.tsx';
import { AuthPage } from '@pages/AuthPage/AuthPage.tsx';
import { RegisterPage } from '@pages/RegisterPage/RegisterPage.tsx';

export const enum PageRoutesPaths {
    MainPage = '/',
    AuthPage = '/login',
    RegisterPage = '/register',
}

export function PageRouter(): React.ReactElement {
    const routes: RouteProps[] = [
        {
            path: PageRoutesPaths.MainPage,
            element: <MainPage />,
        },
        {
            path: PageRoutesPaths.AuthPage,
            element: <AuthPage />,
        },
        {
            path: PageRoutesPaths.RegisterPage,
            element: <RegisterPage />,
        },
    ];

    return (
        <Router>
            <Routes>
                <Route element={<App />}>
                    {routes.map(it => (
                        <Route
                            key={it.path}
                            path={it.path}
                            element={it.element}
                        />
                    ))}
                </Route>
            </Routes>
        </Router>
    );
}
