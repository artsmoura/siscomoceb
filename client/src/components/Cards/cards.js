import React, { useState } from "react";
import Button from "../Button/button";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import './cards.css';

const Card = (props) => {

    const [isActive, setIsActive] = useState(false);

    console.log(isActive);

    return (
        <div className="cardBox" key={props.key && props.key}>
            {props.image ?
                <div className="cardImg" style={{
                    backgroundImage: `url(${props.image})`,
                }}></div>
                : null}
            <div className="cardInfo">
                <h2>{props.title}</h2>
                <p>Data: {props.data}</p>
                <p>Inscrição: {props.inscricaoDate}</p>
                <p>Local: {props.location}</p>
            </div>
            <Button
                name="detalhes"
                text="Detalhes"
                className='btnBlue'
                onClick={props.clickAction}
            />
            <div className="cardOption">
                <Button
                    name="option"
                    className='optionBtn'
                    icon={<BiDotsVerticalRounded size={"2em"} />}
                    onClick={() => setIsActive(!isActive)}
                />
            </div>
        </div>
    );
};

export default Card;