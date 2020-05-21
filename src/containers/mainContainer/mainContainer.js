import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Bienvenido from '../../components/Bienvenido/Bienvenido';
import Tarjetas from '../../components/Tarjetas/Tarjetas';
import Socios from '../../components/Socios/Socios';
import Proyectos from '../../components/Proyectos/Proyectos';
import Registro from '../../components/Registro/Registro';
import Footer from '../../components/Footer/Footer';

const mainContainer = () => {
    return (
        <div>
            <Navbar />
            <Bienvenido />
            <Tarjetas />
            <Socios />
            <Proyectos />
            <Registro />
            <Footer />
        </div>
    )
}

export default mainContainer
