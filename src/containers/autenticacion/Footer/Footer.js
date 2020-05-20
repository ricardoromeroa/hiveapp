import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="footer-back">
                <div className="container footer-align">
                    <div className="row">
                        <div className="d-none d-lg-block">
                            <img className="logo-devf" src="./assets/png/devf-white.png" alt="Logo Devf-la" />
                        </div>

                        <div className="card border-secondary mb-3 border-0" style="max-width: 18rem;">
                            <div className="card-header color-card">Hive</div>
                            <div className="card-body text-secondary color-card">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="#">Categorias</a>
                                    </li>

                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="#">Proyectos</a>
                                    </li>

                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="./views/about-us.html">Sobre nosotros</a>
                                    </li>

                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="#">Freelancers</a>
                                    </li>

                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="#">Empresas</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="card border-secondary mb-3 border-0" style="max-width: 18rem;">
                            <div className="card-header color-card">Empresa</div>
                            <div className="card-body text-secondary color-card">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="#">Cómo trabajamos</a>
                                    </li>

                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="#">Seguridad</a>
                                    </li>

                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="#">Inversionistas</a>
                                    </li>

                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="#">Noticias</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="card border-secondary mb-3 border-0" style="max-width: 18rem;">
                            <div className="card-header color-card">Terminos</div>
                            <div className="card-body text-secondary color-card">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="#">Politicas de privacidad</a>
                                    </li>

                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="#">Terminos y condiciones</a>
                                    </li>

                                    <li className="nav-item ">
                                        <a className="nav-link footer-text" href="#">Código de conducta</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <section>
                <div class="copyright">
                    <p>Copyright © 2020 HIVE </p>
                </div>

            </section>


        </div>
    )
}

export default Footer
