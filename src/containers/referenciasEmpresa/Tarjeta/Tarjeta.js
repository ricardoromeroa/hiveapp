import React, { useState } from 'react'
import './Tarjeta.css';
import Card from 'react-bootstrap/Card'

const Tarjeta = () => {




    return (

        <div className="bodi">
            <Card border="dark card1" >
                <Card.Header className="main-info card-header1"><h5>puesto</h5><h5>sueldo</h5></Card.Header>
                <Card.Body>
                    <Card.Title>empresa</Card.Title>
                    <Card.Text className="main-info">
                    <p>duracion</p><p>lugar</p>
                    </Card.Text>
                    <Card.Text>
                    descripcion
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-around">
                        <span>hab1</span>
                        <span>hab2</span>
                        <span>hab3</span>
                        <span>hab4</span>
                        <span>hab5</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Tarjeta
