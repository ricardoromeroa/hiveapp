import React from 'react';
import NavbarBotones from '../../components/Navbar/NavbarBotones';
import TarjetaFree from './TarjetaFree/TarjetaFree';
import FiltroFree from './FiltroFree/FiltroFree';

const referenciasFreelancer = () => {
    return (

        <div>
            <NavbarBotones />
            <div className="bodi" >
                <div className="container d-flex flex-row" >

                    <div>
                        <FiltroFree />
                    </div>
                    <div>
                        <TarjetaFree />
                        <TarjetaFree />
                        <TarjetaFree />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default referenciasFreelancer
