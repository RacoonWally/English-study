import React from 'react';

import './Input.scss';

interface InputProps {
    name: string;
    label: string;
    value?: string;
    disabled?: boolean;
    type?: string;
    placeholder?: string;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

const ROOT_CLASS_NAME = 'input';

export function Input({ name, label, type = 'text', placeholder, value, onChange, disabled }: InputProps): React.ReactElement {
    return (
        <div className={ROOT_CLASS_NAME}>
            <label htmlFor={name} className={`${ROOT_CLASS_NAME}__label`}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                disabled={disabled}
                type={type}
                value={value}
                onChange={onChange}
                className={`${ROOT_CLASS_NAME}__input`}
                placeholder={placeholder}
            />
        </div>
    );
}