import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import './App.scss';

import { useAppSelector } from './store/hooks';

import { HeaderControls } from './components/HeaderControls/HeaderControls.tsx';
import { PageRoutesPaths } from './PageRouter.tsx';

const ROOT_CLASS_NAME = 'app';

export const App: React.FC = () => {
    const userState = useAppSelector(state => state.user);
    const navigate = useNavigate();

    const isAuthenticated = userState.isAuthenticated;

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(PageRoutesPaths.AuthPage);
        }
    }, [isAuthenticated]);

    return (
        <div className={ROOT_CLASS_NAME}>
            <header className={`${ROOT_CLASS_NAME}_controls`}>
                <HeaderControls />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};
