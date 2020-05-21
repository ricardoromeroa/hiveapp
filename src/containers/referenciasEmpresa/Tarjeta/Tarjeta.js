import React, { useState, useEffect } from 'react'
import './Tarjeta.css';
import Card from 'react-bootstrap/Card'
import axios from 'axios';


const Tarjeta = ({ empresa, puesto, sueldo, duracion, lugar, descripcion, requisitos }) => {

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

        <div className="bodi">
            <Card border="dark card1" >
                <Card.Header className="main-info card-header1"><h5>{puesto}</h5><h5>{sueldo}</h5></Card.Header>
                <Card.Body>
                    <Card.Title>{empresa}</Card.Title>
                    <Card.Text className="main-info">
                        <p>{duracion}</p><p>{lugar}</p>
                    </Card.Text>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-around">
                        <span>{requisitos}</span>
                        <span>hab2</span>
                        <span>hab3</span>
                        <span>hab4</span>
                        <span>hab5</span>
                    </Card.Text>
                </Card.Body>
                {/* {Object.keys(Oferta).map((id) =>
                    <Oferta
                        // key={id}
                        // puesto={Oferta[id].puesto}
                        // empresa={Oferta[id].empresa}
                        // lugar={Oferta[id].lugar}
                        // id={id}
                        // done={Oferta[id].done}
                        // getOferta={getOferta}
                    />)} */}
            </Card>
        </div>
    )
}

export default Tarjeta
