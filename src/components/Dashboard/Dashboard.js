import React from 'react'
import { Link } from 'react-router-dom';

// import axios from 'axios';
import logo from '../../assets/png/hive.png';
import devfwhite from '../../assets/png/devf-white.png';
import usersolid from '../../assets/icons/usersolid.svg'
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div>
            {/* <div className="bg-light">
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="logo"><img src={logo} />
                </Link>
                </div>
            </div> */}

            <div className="mainpage">
                <aside id="sidebar">
                    <div className="sidebar-header">
                        <img className="pi" src={usersolid} alt="" />
                        <Link className="pitexto" to="#">cambia tu foto de perfil</Link>
                    </div>

                    <ul className="list-unstyled components">
                        <p className="usuario" id="objeto-usuario">Nombre de Usuario</p>
                        <h5 className="nombre" id="objeto-nombre">Nombre</h5>
                        <li>
                            <Link className="listitems" href="#">Perfil</Link>
                        </li>
                        <li className="active">
                            <Link href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                                className="dropdown-toggle">Servicios</Link>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <Link  to="#">Directorio</Link>
                                </li>
                                <li>
                                    <Link  to="#">Vacantes</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="listitems"  to="#">Calendario de Cursos y Eventos</Link>
                        </li>
                        <li>
                            <Link className="listitems"  to="#">Ayuda</Link>
                        </li>
                        <li>
                            <Link className="listitems" to="">Cerrar Sesión</Link>
                        </li>
                    </ul>
                </aside>   
                <div className="row">
                    <div className="container-fluid col-12">
                        <div className="news col-12"><iframe width="100%" height="100%"
                            src="https://embed.windy.com/embed2.html?lat=29.069&lon=-110.954&zoom=5&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=29.069&detailLon=-110.954&metricWind=default&metricTemp=default&radarRange=-1"
                            frameborder="0"></iframe>
                        </div>
                        <div className="news col-12"><iframe width="100%" height="100%"
                            src="https://tech.economictimes.indiatimes.com/widget/technology" frameborder="0"></iframe>
                        </div>
                        <div className="col-12">
                            <h3><Link className="textcolor" to="https://www.zeitverschiebung.net/es/city/4004898"><span>Hora
                                actual en</span><br />Hermosillo, México</Link></h3>
                                <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=medium&timezone=America%2FHermosillo"
                                width="100%" height="100%" frameborder="0" seamless></iframe>
                        </div>
                        <Link className="col-12"><img width="100%" height="90%" src={devfwhite} />
                </Link>
                        {/* <div className="col-12"><img width="100%" height="90%" src="../assets/png/cursosdevf.png"
                            alt="masterdevf">
                        </div> */}
                        <div className="col-12"><iframe width="100%" height="100%"
                                src="https://tech.economictimes.indiatimes.com/widget/startups" frameborder="0"></iframe>
                        </div>
                        <iframe className="col-12" src="https://es.widgets.investing.com/top-cryptocurrencies?theme=lightTheme"
                            width="100%" height="600" frameborder="0" allowtransparency="true" marginwidth="0"
                            marginheight="0">   
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Dashboard