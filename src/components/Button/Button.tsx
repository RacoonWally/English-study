import React from 'react';
import classNames from 'classNames';

import './Button.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string | React.ReactNode;
    theme?: ButtonTheme;
    modifiers?: ButtonModifiers[];
    onClick(): void | Promise<void>;
}

const ROOT_CLASS_NAME = 'button';

export enum ButtonTheme {
    Primary = `${ROOT_CLASS_NAME}__primary`,
    Secondary = `${ROOT_CLASS_NAME}__secondary`,
    Light = `${ROOT_CLASS_NAME}__light`,
}

export enum ButtonModifiers {
    Small = `${ROOT_CLASS_NAME}_small`,
    Middle = `${ROOT_CLASS_NAME}_middle`,
    Big = `${ROOT_CLASS_NAME}_big`,
    Inherit = `${ROOT_CLASS_NAME}_inherit`,
}

export function Button({
    onClick,
    modifiers = [ButtonModifiers.Middle],
    theme = ButtonTheme.Primary,
    label,
    ...props
}: Props) {
    return (
        <button
            className={classNames([`${ROOT_CLASS_NAME}`, theme, ...modifiers])}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    );
}
