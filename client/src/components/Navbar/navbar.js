import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Button from '../Button/button';
import './navbar.css';
import { useWindowDimensions } from '../../utils';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

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