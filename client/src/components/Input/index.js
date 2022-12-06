import React from 'react';
import './style.css';

const Input = ({
    type = '',
    name = '',
    id = '',
    value = '',
    changeInput,
    leftButton,
    placeholder,
    onPressEnter = () => { },
    onKeyDown = () => { },
    isRequired = false,
    className = ''
}) => {
    return (
        <div className="inputBox">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={changeInput}
                placeholder={placeholder}
                onKeyPress={onPressEnter}
                onKeyDown={onKeyDown}
                required={isRequired}
                className={className}
            >
            </input>
        </div>
    );
};

export default Input;