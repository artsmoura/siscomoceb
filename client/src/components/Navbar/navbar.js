import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Button from '../Button/button';
import './navbar.css';
import { useWindowDimensions } from '../../utils';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const user = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        const token = user?.token;

        // ???? VERIFICAR AQUI PQ NO VIDEO ELE SETA O USER IGUAL O JSON.PARSE DO USER ACIMA
        // setUser()
    }, []);

    // VAI SER UTILIZADO QUANDO FOR COLOCAR O SITE EM MODO RESPONSIVO
    const screenSize = useWindowDimensions();

    const handleClick = (e) => {
        console.log(`CLICOU no ${e.target.name}`);
    };

    return (
        <div className='navbar'>

            <NavLink to="/">
                <div className='logoImg'>
                    <img src="img/comocebLogo.png" alt='logo comoceb'></img>
                </div>
            </NavLink>

            <NavLink className="navbarBtn" to="/evento">
                <Button
                    name="evento"
                    text="Evento"
                    className="navbarBtn"
                    icon={<BiChevronDown />}
                    onClick={handleClick}
                />
            </NavLink>

            <NavLink className="navbarBtn" to="/inscricao">
                <Button
                    name="inscricao"
                    text="Inscrição"
                    className="navbarBtn"
                    icon={<BiChevronDown />}
                    onClick={handleClick}
                />
            </NavLink>

            <NavLink className="navbarBtn" to="/administracao">
                <Button
                    name="administracao"
                    text="Administração"
                    className="navbarBtn"
                    icon={<BiChevronDown />}
                    onClick={handleClick}
                />

            </NavLink>

            <NavLink className="navbarBtn" to="/relatorio">
                <Button
                    name="relatorio"
                    text="Relatório"
                    className="navbarBtn"
                    icon={<BiChevronDown />}
                    onClick={handleClick}
                />
            </NavLink>

            <div className='profileImg'>
                <img src="img/avatar.png" alt='perfil'></img>
            </div>
        </div>
    );
};

export default Navbar;