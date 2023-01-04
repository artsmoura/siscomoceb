import React from 'react';
import './button.css';

const Button = (props) => {
    return (
        <div className={props.className && props.className} onClick={props.onClick} text={props.text}>
            <button
                type={props.type && props.type}
                name={props.name && props.name}
                id={props.id && props.id}
                required={props.isRequired && props.isRequired}
                className="button"
            >
                <span>
                    {props.text && props.text}
                </span>
                {props.icon && props.icon}
            </button>
        </div>
    );
};

export default Button;