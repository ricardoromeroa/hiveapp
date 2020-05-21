import React, { useState } from 'react'
import './Tarjeta.css';
import Card from 'react-bootstrap/Card'

const Tarjeta = ({ puesto, sueldo, empresa, duracion, lugar, descripcion, hab1, hab2, hab3, hab4, hab5 }) => {

    const [puesto, setPuesto] = useState('');
    const [sueldo, setSueldo] = useState('');
    const [empresa, setEmrpesa] = useState('');
    const [duracion, setDuracion] = useState('');
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
                <Card.Header className="main-info"><h5>{puesto}</h5><h5>{sueldo}</h5></Card.Header>
                <Card.Body>
                    <Card.Title>{empresa}</Card.Title>
                    <Card.Text className="main-info">
                    <p>{duracion}</p><p>{lugar}</p>
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

export default Tarjeta
