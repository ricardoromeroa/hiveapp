import React from 'react'
//Unicamenta para nuestra Nav 
import { NavLink } from 'react-router-dom';
//Insertar imagen
import logo from '../../assets/png/hive.png';
import './Navbar.css';

const NavbarIndex = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light whiteback move-rigth container">
            <img className="logo-hive" src={logo} alt="Logo de Hive" />
            <div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item border border-ligth rounded button-margin">
                            <NavLink className="nav-link" to="/formulario_oferta">¿Tienes un proyecto?</NavLink>
                        </li>
                        <li className="nav-item border border-ligth rounded button-margin">
                            <NavLink className="nav-link" to="/signup">Registrate para buscar</NavLink>
                        </li>
                        <li className="nav-item active border border-dark rounded button-margin">
                            <NavLink className="nav-link" to="/auth">Inicia sesión<span class="sr-only">(current)</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarIndex
