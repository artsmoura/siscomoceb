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
                <spam>
                    {props.text && props.text}
                </spam>
                {props.icon && props.icon}
            </button>
        </div>
    );
};

export default Button;