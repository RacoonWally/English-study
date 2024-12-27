import React, { useCallback, useMemo } from 'react';

import './HeaderControls.scss';

import { useAppDispatch, useAppSelector } from '@store/hooks.ts';
import { logout } from '@store/reducers/user/userReducer.ts';
import { setPopup } from '@store/reducers/app/appReducer.ts';

import { PopupType } from '@components/PopupSwitcher/PopupSwitcher.tsx';
import { DropDown } from '@components/DropDown/DropDown.tsx';

const ROOT_CLASS_NAME = 'header-controls';

export function HeaderControls(): React.ReactElement {
    const dispatch = useAppDispatch();

    const userState = useAppSelector(state => state.user);

    const isAuthenticated = userState.isAuthenticated;
    const userData = userState.user;

    const onLogout = useCallback(() => {
        dispatch(logout());
    }, [logout]);

    const onProfile = useCallback(() => {
        dispatch(setPopup({ popupType: PopupType.Profile, data: null }));
    }, [setPopup]);

    const dropDownItems = useMemo(
        () => [
            {
                label: 'Профиль',
                onClick: onProfile,
            },
            {
                label: 'Выйти',
                onClick: onLogout,
            },
        ],
        [],
    );

    return (
        <div className={ROOT_CLASS_NAME}>
            {isAuthenticated && (
                <>
                    {userData?.name ?? ''}
                    <DropDown
                        label={'$'}
                        items={dropDownItems}
                    />
                </>
            )}
        </div>
    );
}
