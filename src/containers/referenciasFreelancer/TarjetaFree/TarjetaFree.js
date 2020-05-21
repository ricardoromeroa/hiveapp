import React, { useState } from 'react'
import './TarjetaFree.css';
import Card from 'react-bootstrap/Card'

const TarjetaFree = ({ nombre, sueldo, puesto, lugar, descripcion, hab1, hab2, hab3, hab4, hab5 }) => {

    const [nombre, setNombre] = useState('');
    const [sueldo, setSueldo] = useState('');
    const [puesto, setPuesto] = useState('');
    const [lugar, setLugar] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [hab1, setHab1] = useState('');
    const [hab2, setHab2] = useState('');
    const [hab3, setHab3] = useState('');
    const [hab4, setHab4] = useState('');
    const [hab5, setHab5] = useState('');


    return (

        <div className="bodi">
            <Card border="dark" >
                <Card.Header className="main-info card-header"><h4>{nombre}</h4><h5>{sueldo}</h5></Card.Header>
                <Card.Body>
                    <Card.Title>{puesto}</Card.Title>
                    <Card.Text className="main-info">
                        <p>{lugar}</p>
                    </Card.Text>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-around">
                        <span>{hab1}</span>
                        <span>{hab2}</span>
                        <span>{hab3}</span>
                        <span>{hab4}</span>
                        <span>{hab5}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TarjetaFree
