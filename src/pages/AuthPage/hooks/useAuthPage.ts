import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageRoutesPaths } from '@root/PageRouter.tsx';
import { AuthData } from '@store/reducers/user/types.ts';
import { useLoginMutation } from '@store/api/userApi/userApi.ts';

interface Data {
    authData: AuthData;
    onChangeInput: ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => void;
    onLogin: () => Promise<void>;
    onRegister: () => Promise<void>;
}

export function useAuthPage(): Data {
    const [login] = useLoginMutation();
    const navigate = useNavigate();

    const [authData, setAuthData] = useState<AuthData>({ login: '', password: '' });

    const onChangeInput = useCallback(
        ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>): void => {
            setAuthData({ ...authData, [name]: value });
        },
        [authData],
    );

    const onLogin = useCallback(async (): Promise<void> => {
        await login(authData).unwrap();
        navigate(PageRoutesPaths.MainPage);
    }, [authData]);

    const onRegister = useCallback(async (): Promise<void> => {
        navigate(PageRoutesPaths.RegisterPage);
    }, []);

    return {
        authData,
        onChangeInput,
        onLogin,
        onRegister,
    };
}
