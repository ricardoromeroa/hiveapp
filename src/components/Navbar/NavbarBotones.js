import React from 'react';
//Unicamenta para nuestra Nav 
import { NavLink } from 'react-router-dom';
//Insertar imagen
import logo from '../../assets/png/hive.png';
import './Navbar.css';


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
                            <NavLink className="nav-link" to="#">Quienes Somos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/referencias_empresa">Vacantes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/referencias_freelancer">Candidatos</NavLink>
                        </li>
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
