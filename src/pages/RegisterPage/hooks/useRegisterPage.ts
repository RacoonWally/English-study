import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRegisterMutation } from '@store/api/userApi/userApi.ts';
import { RegisterData } from '@store/reducers/user/types.ts';
import { PageRoutesPaths } from '../../../PageRouter.tsx';

interface Data {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    error: any;
    formData: any;
    timer: number;
    errorMessage: string;
    isAllDataValid: boolean;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => Promise<void>;
    onCancel: () => void;
}

export function useRegisterPage(): Data {
    const [register, { isLoading, isError, isSuccess, data, error }] = useRegisterMutation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<RegisterData>({ name: '', email: '', password: '' });
    const [timer, setTimer] = useState(5); // Таймер обратного отсчёта

    const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    useEffect(() => {
        if (isSuccess) {
            const interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);

            const timeout = setTimeout(() => {
                navigate(PageRoutesPaths.AuthPage);
            }, 5000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [isSuccess]);

    const onSubmit = useCallback(async (): Promise<void> => {
        try {
            await register(formData).unwrap();
        } catch (err) {
            console.error('Failed to register:', error);
        }
    }, [register, formData, data, error]);

    const onCancel = useCallback((): void => {
        navigate(PageRoutesPaths.AuthPage);
    }, []);

    const errorMessage = useMemo((): string => {
        if (error && 'data' in error) {
            return (error.data as string) || 'Неизвестная ошибка';
        }
        if (error && 'message' in error) {
            return error.message || 'Что-то пошло не так';
        }
        return 'Что-то пошло не так';
    }, [error]);

    const isAllDataValid = useMemo(() => {
        return !!formData.name && !!formData.email && !!formData.password;
    }, [formData]);

    return {
        isLoading,
        isError,
        isSuccess,
        error,
        formData,
        timer,
        errorMessage,
        isAllDataValid,
        onInputChange,
        onSubmit,
        onCancel,
    };
}
