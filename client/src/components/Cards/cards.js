import React from "react";
import Button from "../Button/button";
import './cards.css';

const Card = (props) => {
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
        </div>
    );
};

export default Card;