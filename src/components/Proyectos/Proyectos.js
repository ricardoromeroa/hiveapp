import React from 'react'
import '../Footer/Footer.css';
import web from '../../assets/png/pro_web.png'
import front from '../../assets/png/pro_front.png'
import back from '../../assets/png/pro_back.png'
import full from '../../assets/png/pro_full.png'
import { Link } from 'react-router-dom';

const Proyectos = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <div className="pro-text">
                        <h3>Visita nuestros proyectos</h3>
                    </div>
                </div>
                <div className="container row align-cards">
                    <div className="card marging-cards shadow-sm p-3 mb-5 bg-white rounded text-center" style={{width: 18 + "rem"}}>
                        <img src={web} className="card-img-top"
                            alt="Desarrollo web-Imagen de manos frente a la computadora con código" />
                        <div className="card-body">
                            <h5 className="card-title text-cards">Desarrollo Web</h5>
                            <p className="card-text"></p>
                            <Link to="#" className="btn btn-primary">Ver proyectos</Link>
                        </div>
                    </div>
                    <div className="card marging-cards shadow-sm p-3 mb-5 bg-white rounded text-center" style={{width: 18 + "rem"}}>
                        <img src={front} className="card-img-top"
                            alt="Front end-Imagen de página de computadora" />
                        <div className="card-body">
                            <h5 className="card-title text-cards">Front end</h5>
                            <p className="card-text"></p>
                            <Link to="#" className="btn btn-primary">Ver proyectos</Link>
                        </div>
                    </div>
                </div>
                <div className="container row align-cards">
                    <div className="card marging-cards shadow-sm p-3 mb-5 bg-white rounded text-center" style={{width: 18 + "rem"}}>
                        <img src={back} className="card-img-top" alt="Back end-Imagen de código de computadora" />
                        <div className="card-body">
                            <h5 className="card-title text-cards">Back end</h5>
                            <p className="card-text"></p>
                            <Link to="#" className="btn btn-primary">Ver proyectos</Link>
                        </div>
                    </div>
                    <div className="card marging-cards shadow-sm p-3 mb-5 bg-white rounded text-center" style={{width: 18 + "rem"}}>
                        <img src={full} className="card-img-top"
                            alt="Full stack-computadora con iconos de diferents elementos web" />
                        <div className="card-body">
                            <h5 className="card-title text-cards">Full stack</h5>
                            <p className="card-text"></p>
                            <Link to="#" className="btn btn-primary">Ver proyectos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyectos
