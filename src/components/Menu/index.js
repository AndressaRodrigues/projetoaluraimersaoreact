import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink/Index';

function Menu(){
    return (
    <nav className="Menu">
        <a href="/home">
            <img className="Logo" src={Logo} alt="Grumpflix Logo" />
        </a>

        <ButtonLink className="ButtonLink" href="/">
            Novo Vídeo
        </ButtonLink>
    </nav>

    )
}

export default Menu;