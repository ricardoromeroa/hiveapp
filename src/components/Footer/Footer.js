import React from 'react'
//Unicamenta para nuestra Nav 
import { NavLink } from 'react-router-dom';
//Insertar imagen
import logoDevf from '../../assets/png/devf-white.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer-back">
                <div className="container footer-align-center">
                    <div className="row space-around">
                        <div className="d-none d-lg-block">
                            <a href="https://www.devf.la/">
                                <img className="logo-devf" src={logoDevf} alt="Logo Devf-la" />
                            </a>
                        </div>
                        <div className="avatar">
                            <div className="card border-secondary mb-3 border-0" style={{ maxWidth: 18 + "rem" }}>
                                <div className="card-header color-card">Hive</div>
                                <div className="card-body text-secondary color-card">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item ">
                                            <NavLink className="nav-link footer-text" to="#">Categorias</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link footer-text" to="#">Proyectos</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link footer-text" to="./about_us">Sobre nosotros</NavLink>
                                        </li>
                                        <li class="nav-item ">
                                            <NavLink className="nav-link footer-text" to="/referencias_freeelancer">Freelancers</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link footer-text" to="/referencias_empresa">Empresas</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card border-secondary mb-3 border-0" style={{ maxWidth: 18 + "rem" }}>
                                <div className="card-header color-card">Empresa</div>
                                <div className="card-body text-secondary color-card">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item ">
                                            <NavLink className="nav-link footer-text" to="#">Cómo trabajamos</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link footer-text" to="#">Seguridad</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link footer-text" to="#">Inversionistas</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link footer-text" to="#">Noticias</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card border-secondary mb-3 border-0" style={{ maxWidth: 18 + "rem" }}>
                                <div className="card-header color-card">Terminos</div>
                                <div className="card-body text-secondary color-card">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item ">
                                            <NavLink className="nav-link footer-text" to="#">Politicas de privacidad</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link footer-text" to="#">Terminos y condiciones</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link footer-text" to="#">Código de conducta</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section>
                <div className="copyright">
                    <p>Copyright © 2020 HIVE</p>
                </div>
            </section>
        </div>
    )
}

export default Footer
