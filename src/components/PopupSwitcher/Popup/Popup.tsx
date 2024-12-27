import React from 'react';

import './Popup.scss';

import { useAppDispatch } from '@store/hooks.ts';
import { setPopup } from '@store/reducers/app/appReducer.ts';

interface PopupProps {
    children: React.ReactNode;
}

const ROOT_CLASS_NAME = 'popup';

export function Popup({ children }: PopupProps): React.ReactElement {
    const dispatch = useAppDispatch();

    function onClickOutside() {
        dispatch(setPopup(null));
    }

    return (
        <div className={ROOT_CLASS_NAME}>
            <div
                className={`${ROOT_CLASS_NAME}__overlay`}
                onClick={onClickOutside}
            ></div>
            <div className={`${ROOT_CLASS_NAME}__content`}>{children}</div>
        </div>
    );
}
