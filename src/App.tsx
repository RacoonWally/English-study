import React from 'react';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { setTheme } from './store/reducers/app/appReducer';
import { Theme } from './store/reducers/app/types.ts';
import { login, logout } from './store/reducers/user/userReducer';
import { MainPage } from './pages/MainPage/MainPage.tsx';

export const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.app.theme);
    const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

    const toggleTheme = () => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        dispatch(setTheme(newTheme));
    };

    const toggleAuth = () => {
        if (isAuthenticated) {
            dispatch(logout());
        } else {
            dispatch(login({
                isAuthenticated: true,
                user: {
                    name: 'John Doe', email: '123@mail.ru'
                }
            }));
        }
    };

    return (
        <div className={'root'}>
            <div className={'controls'}>
                <button onClick={toggleTheme}>
                    {theme === Theme.Light ? 'Темная тема' : 'Светлая тема'}
                </button>
                <button onClick={toggleAuth}>
                    {isAuthenticated ? 'Выйти' : 'Войти'}
                </button>
            </div>
            <MainPage />
        </div>
    );
}
