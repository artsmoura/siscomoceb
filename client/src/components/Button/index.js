import React from 'react';
import './style.css';

const Button = (props) => {
    return (
        <div className={props.className && props.className} onClick={props.onClick}>
            <button
                type={props.type && props.type}
                name={props.name && props.name}
                id={props.id && props.id}
                required={props.isRequired && props.isRequired}
                className="button"
            >
                {props.text && props.text}
                {props.icon && props.icon}
            </button>
        </div>
    );
};

export default Button;