import React from 'react'
import registro from '../../assets/icons/registro.png';
import enlace from '../../assets/icons/enlace.png';
import buscar from '../../assets/icons/buscar.png';
import '../Footer/Footer.css';

const Tarjetas = () => {
    return (
        <section className="container">
            <div className="card-group padding">
                <div className="row1">
                    <div className="cardF border-0 icons col-12 col-sm-12 col-md-6 col-lg-4">
                        <img src={registro} className="centrar icono-size" alt="Reigstro" />
                        <div className="card-body">
                            <h5 className="card-title">Registrate</h5>
                            <p className="card-text text-cards">Llena tu registro con toda la información que se solicita. Esto
                            hará
                            que la
                            búsqueda se mucho más efectiva.</p>
                        </div>
                    </div>
                    <div className="cardF border-0 icons col-12 col-sm-12 col-md-6 col-lg-4">
                        <img src={buscar} className="icono-size" alt="Buscar" />
                        <div className="card-body">
                            <h5 className="card-title">Haz tu búsqueda</h5>
                            <p className="card-text text-cards">Busca entre nuestras multiples ofertas un proyecto en el que
                            puedas
                            participar o
                            a algún asociado dentro de nuestras bases de datos.
                        </p>
                        </div>
                    </div>
                    <div className="cardF border-0 icons col-12 col-sm-12 col-md-6 col-lg-4">
                        <img src={enlace} className="icono-size" alt="Enlace"/>
                        <div className="card-body">
                            <h5 className="card-title">Ponte en contacto</h5>
                            <p className="card-text text-cards">Una vez que hayas visto una oferta que sea atractiva ponte en
                            contacto para
                            poder llegar a un acuerdo, recuerda que calificar tu experiencia al final de plazo, eso nos
                            ayuda a crecer a todos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tarjetas