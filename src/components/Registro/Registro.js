import React from 'react'
import { Link } from 'react-router-dom';

const Registro = () => {
    return (
        <section className="button-bg ">
            <div className="container button-align">
                <div className="button-margin-register">
                    <Link to="/signup">
                        <button type="button" className="btn btn-secondary btn-md rounded-pill">Registrate para buscar</button>
                    </Link>
                </div>
                <div className="button-margin-register">
                    <Link to="/formulario_oferta">
                        <button type="button" className="btn btn-secondary btn-md rounded-pill">¿Tienes un proyecto?</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Registro
