import React from "react";
import Button from "../Button";
import './style.css';

const Card = (props) => {
    return (
        <div className="cardBox">
            {props.image ?
                <div className="cardImg" style={{
                    backgroundImage: `url(${props.image})`,
                }}></div>
                : null}
            <h2>{props.title}</h2>
            <h3>Data: {props.data}</h3>
            <h3>Inscrição: {props.inscricaoDate}</h3>
            <Button
                name="detalhes"
                text="Detalhes"
                className='btnBlue'
                onClick={props.clickAction}
            />
        </div>
    );
};

export default Card;