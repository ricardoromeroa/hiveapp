import React from 'react';
import './TarjetaFree.css';
import Card from 'react-bootstrap/Card';

const TarjetaFree = () => {


    return (

        <div className="bodi">
            <Card border="dark card1" >
                <Card.Header className="main-info card-header1"><h4>Maria Elena Martínez</h4> <p>Bogotá</p></Card.Header>
                <Card.Body>
                    <Card.Title>Developer</Card.Title>
                    <Card.Text>
                        Desarolladora web con 10 años de experiencia en el campo de la programación y el diseño.
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-around">
                        <span>Experiencia en HTML y CSS</span>
                        {/* <span>hab</span>
                        <span>hab3</span>
                        <span>hab</span>
                        <span>hab5</span> */}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card border="dark card1" >
                <Card.Header className="main-info card-header1"><h4>Roberto Murillo</h4><p>Paraguay</p></Card.Header>
                <Card.Body>
                    <Card.Title>Diseñador web</Card.Title>
                    <Card.Text>
                        Diseño de páginas web para grandes empresas y e-comerce.
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-around">
                        <span>Experiencia en HTML, CSS y maquetado</span>
                        {/* <span>hab</span>
                        <span>hab3</span>
                        <span>hab</span>
                        <span>hab5</span> */}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card border="dark card1" >
                <Card.Header className="main-info card-header1"><h4>Pedro Páramo</h4><p>Guatemala</p></Card.Header>
                <Card.Body>
                    <Card.Title>Full Stack</Card.Title>
                    <Card.Text>
                        20 años de experiencia en Full Stack. Dispuesto a cambiar de residencia y buen trabajador en equipo.
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-around">
                        <span>Experiencia en HTML, CSS, React, Angular</span>
                        {/* <span>hab</span>
                        <span>hab3</span>
                        <span>hab</span>
                        <span>hab5</span> */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TarjetaFree
