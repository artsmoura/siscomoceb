import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Button from '../Button';
import Avatar, { genConfig } from 'react-nice-avatar';
import './style.css';

const Navbar = () => {

    const handleClick = (e) => {
        console.log(`CLICOU no ${e.target.name}`);
    };

    const config = {
        "sex": "woman",
        "faceColor": "#AC6651",
        "earSize": "big",
        "eyeStyle": "circle",
        "noseStyle": "short",
        "mouthStyle": "smile",
        "shirtStyle": "hoody",
        "glassesStyle": "round",
        "hairColor": "#F48150",
        "hairStyle": "normal",
        "hatStyle": "none",
        "hatColor": "#fff",
        "eyeBrowStyle": "up",
        "shirtColor": "#77311D",
        "bgColor": "#74D153"
    };
    const myConfig = genConfig(config);

    return (
        <div className='navbar'>
            <div className='logoImg'>
                <img src="img/comocebLogo.png"></img>
            </div>
            <Button
                name="evento"
                text="Evento"
                className='navbarBtn'
                icon={<BiChevronDown />}
                onClick={handleClick}
            />
            <Button
                name="inscricao"
                text="Inscrição"
                className='navbarBtn'
                icon={<BiChevronDown />}
                onClick={handleClick}
            />
            <Button
                name="administracao"
                text="Administração"
                className='navbarBtn'
                icon={<BiChevronDown />}
                onClick={handleClick}
            />
            <Button
                name="relatorio"
                text="Relatório"
                className='navbarBtn'
                icon={<BiChevronDown />}
                onClick={handleClick}
            />
            <div className='profileImg'>
                <img src="img/avatar.png"></img>
            </div>
        </div>
    );
};

export default Navbar;