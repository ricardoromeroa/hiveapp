import React from 'react'
import proceso from '../../assets/png/proceso.png';
import '../Footer/Footer.css';

const Bienvenido = () => {
    return (
        <main className="grayback">
            <div className="container">
                <div className="image-process">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-lg-6">
                            <h4>Bienvenidos a Hive.</h4>
                            <h4>¡Qué bueno que nos encontraste!</h4>
                            <p>
                                Hive está diseñado para que los egresados de Devf y las empresas puedan comunicarse de
                                manera
                                eficiente
                                para
                                que logren sus objetivos. La idea es que si eres ex-alumno Devf puedas encontrar una opción
                                para
                                emplearte y al mismo tiempo mantener contacto con la comunidad y generar una red de
                                profesionales.
                        </p>
                        </div>
                        <img className="image-process image-process-size d-none d-lg-flex col-lg-6" src={proceso}
                            alt="Elementos de desarrollo web" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Bienvenido
