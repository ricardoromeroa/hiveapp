import React from 'react'
import proceso from '../../assets/png/proceso.png';
import '../Footer/Footer.css';
import './Bienvenido.css';

const Bienvenido = () => {
    return (
        <main className="grayback">
            <div className="container">
                <div className="image-process">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-lg-6">

                            <h1 className="text-hive">
                                ¡Bienvenido a Hive!
                        </h1>
                            <h1>
                                La comunidad Ex-DEV.F
                        </h1>
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
