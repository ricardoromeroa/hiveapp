import React from 'react';
import NavbarBotones from '../../components/Navbar/NavbarBotones';
import Tarjeta from './Tarjeta/Tarjeta';
import Filtro from './Filtro/Filtro';

const referenciasEmpresa = () => {
    return (
        <div>
            <NavbarBotones />
            <div className="bodi" >
                <div className="container d-flex flex-row" >

                    <div>
                        <Filtro />
                    </div>
                    <div>
                        <Tarjeta />
                        <Tarjeta />
                        <Tarjeta />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default referenciasEmpresa
