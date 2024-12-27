import React from 'react';

import './MainPage.scss';
import { LeftMenu } from '../../components/LeftMenu/LeftMenu.tsx';

const ROOT_CLASS_NAME = 'main-page';

export function MainPage(): React.ReactElement {
    return (
        <div className={ROOT_CLASS_NAME}>
            <LeftMenu />
        </div>
    );
}
