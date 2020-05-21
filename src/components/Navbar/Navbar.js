import React from 'react';
//Unicamenta para nuestra Nav 
import { NavLink } from 'react-router-dom';
//Insertar imagen
import logo from '../../assets/png/hive.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" activeClsssName="disable" to="/">
                    <img src={logo} alt="logo hive"/>
                </NavLink>
            </nav>
        </header>   
    )
}

export default Navbar;
