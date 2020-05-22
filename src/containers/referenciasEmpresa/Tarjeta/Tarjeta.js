import React from 'react';
import './Tarjeta.css';
import Card from 'react-bootstrap/Card';



const Tarjeta = ({ empresa, puesto, sueldo, duracion, ubicacion, descripcion, requisitos }) => {



    return (

        <div className="bodi">
            <Card border="dark card1" >
                <Card.Header className="main-info card-header1"><h5>{puesto}</h5><h5>{sueldo}</h5></Card.Header>
                <Card.Body>

                    <Card.Text className="main-info">
                        <h5>{empresa}</h5><p>{ubicacion}</p>
                    </Card.Text>

                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-around">
                        <span>{requisitos}</span>
                        {/* <span>hab2</span>
                        <span>hab3</span>
                        <span>hab4</span>
                        <span>hab5</span> */}
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    )
}

export default Tarjeta
