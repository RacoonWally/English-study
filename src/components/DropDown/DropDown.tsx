import React from 'react';

import './DropDown.scss';

interface Props {
    label: string | React.ReactNode;
    items: DropDownItem[];
}

export interface DropDownItem {
    label: string;
    onClick: () => void;
}

const ROOT_CLASS_NAME = 'drop-down';

export function DropDown({ label, items }: Props): React.ReactElement {
    return (
        <div className={ROOT_CLASS_NAME}>
            <div className={`${ROOT_CLASS_NAME}__button`}>{label}</div>
            <div className={`${ROOT_CLASS_NAME}__menu-container`}>
                <ul className={`${ROOT_CLASS_NAME}__menu`}>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={`${ROOT_CLASS_NAME}__item`}
                            onClick={item.onClick}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
