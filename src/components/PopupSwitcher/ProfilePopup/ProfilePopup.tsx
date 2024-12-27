import React from 'react';

import './ProfilePopup.scss';

import { Popup } from '@components/PopupSwitcher/Popup/Popup.tsx';

const ROOT_CLASS_NAME = 'profile-popup';

export function ProfilePopup(): React.ReactElement {
    return (
        <Popup>
            <div className={ROOT_CLASS_NAME}></div>;
        </Popup>
    );
}
