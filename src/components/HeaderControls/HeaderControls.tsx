import React, { useCallback } from 'react';

import './HeaderControls.scss';

import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { logout } from '../../store/reducers/user/userReducer.ts';
import { Button, ButtonModifiers } from '../Button/Button.tsx';

export function HeaderControls(): React.ReactElement {
    const dispatch = useAppDispatch();

    const userState = useAppSelector(state => state.user);

    const isAuthenticated = userState.isAuthenticated;
    const userData = userState.user;

    const onLogout = useCallback(() => {
        if (isAuthenticated) {
            dispatch(logout());
        }
    }, [logout]);

    return (
        <div className={'header_controls'}>
            {isAuthenticated && (
                <div>
                    {userData?.name ?? ''}
                    <Button
                        label={'Выход'}
                        onClick={onLogout}
                        modifiers={[ButtonModifiers.Small]}
                    />
                </div>
            )}
        </div>
    );
}
