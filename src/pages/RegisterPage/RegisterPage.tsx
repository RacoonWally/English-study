import React from 'react';
import classNames from 'classNames';

import './RegisterPage.scss';

import { Input } from '../../components/Input/Input.tsx';
import { Button, ButtonModifiers, ButtonTheme } from '../../components/Button/Button.tsx';
import { useRegisterPage } from './hooks/useRegisterPage.ts';

const ROOT_CLASS_NAME = 'register-page';

export function RegisterPage(): React.ReactElement {
    const {
        isLoading,
        isError,
        isSuccess,
        formData,
        timer,
        errorMessage,
        isAllDataValid,
        onInputChange,
        onSubmit,
        onCancel,
    } = useRegisterPage();

    return (
        <div className={ROOT_CLASS_NAME}>
            <div className={`${ROOT_CLASS_NAME}_container`}>
                <h1 className={`${ROOT_CLASS_NAME}_title`}>Регистрация</h1>
                <div className={`${ROOT_CLASS_NAME}_form`}>
                    <Input
                        name="name"
                        label="Имя"
                        placeholder="Введите ваше имя"
                        disabled={isLoading}
                        value={formData.name}
                        onChange={onInputChange}
                    />
                    <Input
                        name="email"
                        type="email"
                        label="Email"
                        value={formData.email}
                        placeholder="Введите ваш email"
                        disabled={isLoading}
                        onChange={onInputChange}
                    />
                    <Input
                        name="password"
                        label="Пароль"
                        type="password"
                        value={formData.password}
                        disabled={isLoading}
                        placeholder="Введите пароль"
                        onChange={onInputChange}
                    />
                </div>
                <div className={`${ROOT_CLASS_NAME}_actions`}>
                    <Button
                        label="Зарегистрироваться"
                        onClick={onSubmit}
                        disabled={isLoading || !isAllDataValid}
                        modifiers={[ButtonModifiers.Middle]}
                    />
                    <Button
                        label="Отмена"
                        onClick={onCancel}
                        disabled={isLoading}
                        theme={ButtonTheme.Secondary}
                        modifiers={[ButtonModifiers.Middle]}
                    />
                </div>
                <div className={`${ROOT_CLASS_NAME}_result`}>
                    {isError && (
                        <p className={classNames([`${ROOT_CLASS_NAME}_message`, `${ROOT_CLASS_NAME}_error`])}>
                            {errorMessage}
                        </p>
                    )}
                    {isSuccess && (
                        <>
                            <p className={classNames([`${ROOT_CLASS_NAME}_message`, `${ROOT_CLASS_NAME}_success`])}>
                                Регистрация прошла успешно.
                            </p>
                            <p className={`${ROOT_CLASS_NAME}_timer`}>Вы будите перенаправлены через: {timer}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
