import React from 'react';
import './style.css';

const Input = (props) => {
    return (
        <div className="inputBox">
            <input
                type={props.type && props.type}
                name={props.name && props.name}
                id={props.id && props.id}
                value={props.value && props.value}
                onChange={props.onChange && props.onChange}
                placeholder={props.placeholder && props.placeholder}
                onKeyPress={props.onPressEnter && props.onPressEnter}
                onKeyDown={props.onKeyDown && props.onKeyDown}
                required={props.isRequired && props.isRequired}
                className={props.className && props.className}
            >
            </input>
        </div>
    );
};

export default Input;