import React from 'react'
import '../Footer/Footer.css';

const Tarjetas = () => {
    return (
        <section className="container">
            <div className="card-group padding">
                <div className="row">
                    <div className="card border-0 icons col-12 col-sm-12 col-md-6 col-lg-4">
                        <i className="fa fa-id-card fa-5x" aria-hidden="true"></i>
                        <div className="card-body">
                            <h5 className="card-title">Registrate</h5>
                            <p className="card-text text-cards">Llena tu registro con toda la información que se solicita. Esto
                            hará
                            que la
                            búsqueda se mucho más efectiva.</p>
                        </div>
                    </div>
                    <div className="card border-0 icons col-12 col-sm-12 col-md-6 col-lg-4">
                        <i className="fas fa-search fa-5x" aria-hidden="true"></i>
                        <div className="card-body">
                            <h5 className="card-title">Haz tu búsqueda</h5>
                            <p className="card-text text-cards">Busca entre nuestras multiples ofertas un proyecto en el que
                            puedas
                            participar o
                            a algún asociado dentro de nuestras bases de datos.
                        </p>
                        </div>
                    </div>
                    <div className="card border-0 icons col-12 col-sm-12 col-md-6 col-lg-4">
                        <i className="fa fa-link fa-5x" aria-hidden="true"></i>
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