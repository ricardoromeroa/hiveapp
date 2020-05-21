import React from 'react';
//Unicamenta para nuestra Nav 
import { NavLink } from 'react-router-dom';
//Insertar imagen
import logo from '../../assets/png/hive.png';
import './Navbar.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const NavbarBotones = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo}  alt="logo hive"/>
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about_us">Quienes Somos</NavLink>
                        </li>
                        <DropdownButton id="dropdown-split-variants-Info" className="nav-item" title="Buscar">
                            <Dropdown.Item href="/referencias_empresa">Vacantes</Dropdown.Item>
                            <Dropdown.Item href="/referencias_freeelancer">Candidatos</Dropdown.Item>
                        </DropdownButton>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Concursos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/perfil_usuario">Mi Perfil</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    )
}

export default NavbarBotones;
