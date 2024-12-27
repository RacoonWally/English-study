import React from 'react';

import './AuthPage.scss';

import { Input } from '@components/Input/Input.tsx';
import { Button, ButtonModifiers, ButtonTheme } from '@components/Button/Button.tsx';
import { useAuthPage } from './hooks/useAuthPage.ts';

const ROOT_CLASS_NAME = 'auth-page';

export function AuthPage(): React.ReactElement {
    const { authData, onLogin, onChangeInput, onRegister } = useAuthPage();
    return (
        <div className={ROOT_CLASS_NAME}>
            <div className={`${ROOT_CLASS_NAME}__container`}>
                <h1 className={`${ROOT_CLASS_NAME}__title`}>Вход</h1>
                <div className={`${ROOT_CLASS_NAME}__form`}>
                    <Input
                        name="login"
                        label="Логин или Email"
                        value={authData.login}
                        placeholder="Введите логин или email"
                        onChange={onChangeInput}
                    />
                    <Input
                        name="password"
                        label="Пароль"
                        value={authData.password}
                        placeholder="Введите пароль"
                        onChange={onChangeInput}
                    />
                    <div className={`${ROOT_CLASS_NAME}__actions`}>
                        <Button
                            label="Войти"
                            onClick={onLogin}
                            modifiers={[ButtonModifiers.Middle]}
                            disabled={!authData?.login || !authData?.password}
                        />
                        <Button
                            label="Регистрация"
                            onClick={onRegister}
                            theme={ButtonTheme.Secondary}
                            modifiers={[ButtonModifiers.Middle]}
                        />
                    </div>
                    <Button
                        label="Восстановить пароль"
                        onClick={() => {}}
                        theme={ButtonTheme.Light}
                        modifiers={[ButtonModifiers.Small]}
                    />
                </div>
            </div>
        </div>
    );
}
