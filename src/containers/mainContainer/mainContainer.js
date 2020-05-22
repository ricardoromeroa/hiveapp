import React from 'react';
import NavbarIndex from '../../components/Navbar/NavbarIndex';
import Bienvenido from '../../components/Bienvenido/Bienvenido';
import Tarjetas from '../../components/Tarjetas/Tarjetas';
import Socios from '../../components/Socios/Socios';
import Proyectos from '../../components/Proyectos/Proyectos';
import Registro from '../../components/Registro/Registro';
import Footer from '../../components/Footer/Footer';

const mainContainer = () => {
    return (
        <div>
            <NavbarIndex />
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
