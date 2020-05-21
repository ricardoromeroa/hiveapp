import React, { useState } from 'react'
import './TarjetaFree.css';
import Card from 'react-bootstrap/Card'

const TarjetaFree = () => {


    return (

        <div className="bodi">
            <Card border="dark card1" >
                <Card.Header className="main-info card-header1"><h4>nombre</h4><h5>sueldo</h5></Card.Header>
                <Card.Body>
                    <Card.Title>puesto</Card.Title>
                    <Card.Text className="main-info">
                        <p>lugar</p>
                    </Card.Text>
                    <Card.Text>
                        descripcion
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-around">
                        <span>hab1</span>
                        <span>hab</span>
                        <span>hab3</span>
                        <span>hab</span>
                        <span>hab5</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TarjetaFree
