import React, { useEffect, useState } from 'react';
import NavbarBotones from '../../components/Navbar/NavbarBotones';
import Tarjeta from './Tarjeta/Tarjeta';
import Filtro from './Filtro/Filtro';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

const ReferenciasEmpresa = () => {

    const [Oferta, setOferta] = useState({});
    const key = "hive-crud"

    const getOferta = () => {
        axios.get(`https://${key}.firebaseio.com/oferta.json`)
            .then(({ data }) => setOferta(data));

    }

    useEffect(() => {
        getOferta();
    }, [])

    return (
        <div>
            <NavbarBotones />
            <div className="bodi" >
                <div className="container d-flex flex-row" >

                    <div>
                        <Filtro />
                    </div>
                    <div>
                    {Object.keys(Oferta).map((id) =>
                    <Tarjeta
                        key={id}
                        puesto={Oferta[id].puesto}
                        empresa={Oferta[id].empresa}
                        sueldo={Oferta[id].sueldo}
                        ubicacion={Oferta[id].ubicacion}
                        duracion={Oferta[id].duracion}
                        descripcion={Oferta[id].descripcion}
                        requisitos={Oferta[id].requisitos}
                        id={id}
                        done={Oferta[id].done}
                        getOferta={getOferta}
                    />)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ReferenciasEmpresa
