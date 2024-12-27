import React from 'react';

import { useAppSelector } from '@store/hooks.ts';
import { ProfilePopup } from '@components/PopupSwitcher/ProfilePopup/ProfilePopup.tsx';

export enum PopupType {
    Profile = 'profile',
}

export function PopupSwitcher(): React.ReactElement | null {
    const { popupProps } = useAppSelector(state => state.app);

    let popup: React.ReactElement | null = null;

    switch (popupProps?.popupType) {
        case PopupType.Profile: {
            popup = <ProfilePopup />;
            break;
        }
        default: {
            popup = null;
        }
    }

    return popup;
}
