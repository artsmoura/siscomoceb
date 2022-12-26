import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import './selectbox.css';


const Selectbox = (props) => {

    const listSelect = props.options.option;

    const [isActive, setIsActive] = useState(false);
    const [optionsFilter, setOptionsFilter] = useState([]);

    useEffect(() => {
        setOptionsFilter(listSelect);
    }, [listSelect]);

    const changeOption = option => {
        const InfoDefault = {
            target: {
                type: 'select',
                name: props.name,
                value: {}
            }
        };

        InfoDefault.target.value = option.value ? option.value : option.name;
        props.action(InfoDefault);
        setIsActive(false);
    };

    return (
        <>
            <div className="selectBox">
                <div className={`selectBtn ${isActive}`} onClick={() => setIsActive(!isActive)}>
                    <span className={`labelFloating${props.disabled ? "-disabled" : ""}`}>{props.label}</span>
                    <span>{props.selected}</span>
                    <BiChevronDown />
                </div>
                {isActive && (
                    <div className="selectConteudo">
                        {optionsFilter.map((option) => (
                            <div key={option.value ? option.value : option.name} className="selectItem" onClick={(e) => {
                                // handleSelect(option);
                                // setIsActive(false)
                                changeOption(option);
                            }}>
                                {option.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Selectbox;