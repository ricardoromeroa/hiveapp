import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/png/hive.png';
import './formularioOferta.css'

{/*{ empresa, puesto, descripcion, requisitos, tipo, ubicacion, fechap, fechav, nombre, apellido, email }} */}
const FormularioOferta = () => {
    const PROJECT = "hive-crud"

    const [empresa, setEmpresa] = useState('');
    const [puesto, setPuesto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [requisitos, setRequisitos] = useState('');
    const [tipo, setTipo] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [fechap, setFechap] = useState('');
    const [fechav, setFechav] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
    const handleEmpresa = (e) => {
        console.log(e.target.value);
        setEmpresa(e.target.value);
    }

    const handlePuesto = (e) => {
        console.log(e.target.value);
        setPuesto(e.target.value);
    }

    const handleDescripcion = (e) => {
        console.log(e.target.value);
        setDescripcion(e.target.value);
    }

    const handleRequisitos = (e) => {
        console.log(e.target.value);
        setRequisitos(e.target.value);
    }

    const handleTipo = (e) => {
        console.log(e.target.value);
        setTipo(e.target.value);
    }

    const handleUbicacion = (e) => {
        console.log(e.target.value);
        setUbicacion(e.target.value);
    }

    const handleFechap = (e) => {
        console.log(e.target.value);
        setFechap(e.target.value);
    }

    const handleFechav = (e) => {
        console.log(e.target.value);
        setFechav(e.target.value);
    }

    const handleNombre = (e) => {
        console.log(e.target.value);
        setNombre(e.target.value);
    }

    const handleApellido = (e) => {
        console.log(e.target.value);
        setApellido(e.target.value);
    }

    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const publicar = () => {
        setLoading(true);
        if (empresa.length > 0) {
            const body = {
                empresa: empresa,
                puesto: puesto,
                descripcion: descripcion,
                requisitos: requisitos,
                tipo: tipo,
                ubicacion: ubicacion,
                fechap: fechap,
                fechav: fechav,
                nombre: nombre,
                apellido: apellido,
                email: email, 
            }
            axios.post(`https://${PROJECT}.firebaseio.com/ofertas.json`, body)
                .then(() => {
                    history.push("/");
                })
                .catch(() => {
                    setLoading(false);
                    setError("información incompleta");
                });
        } else {
            setLoading(false);
            setError("Verificar que la información esté completa");
        }
    };  
    


    return (
        <div className="container">
            <div className="card col-12">
                <Link className="logo"><img src={logo} />
                </Link>
                <div>
                    <div className="form-row">
                        <div className="col-6">
                            <label for="">Nombre de la Empresa</label>
                            <input onChange={handleEmpresa} value={empresa} type="text" name="empresa" className="form-control" placeholder="empresa" />
                        </div>
                        <div className="col-6">
                            <label for="">Nombre del Puesto/Proyecto</label>
                            <input onChange={handlePuesto} value={puesto} type="text" name="Puesto" className="form-control" placeholder="Puesto/Proyecto" />
                        </div>
                        <div className="form-group col-6">
                            <label for="exampleFormControlTextarea1">Descripión del Puesto/Proyecto</label>
                            <textarea onChange={handleDescripcion} value={descripcion} className="form-control" name="descripción" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group col-6">
                            <label for="exampleFormControlTextarea1">Requisitos</label>
                            <textarea onChange={handleRequisitos} value={requisitos} className="form-control" name="requisitos" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group col-6">
                            <label for="exampleFormControlSelect1">Tipo de Puesto</label>
                            <select onChange={handleTipo} value={tipo} className="form-control" name="tipo" id="exampleFormControlSelect1">
                                <option>Tipo de Puesto</option>
                                <option>Medio Tiempo</option>
                                <option>Tiempo Completo</option>
                                <option>Prácticas Profesionales</option>
                                <option>Proyecto</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label for="">Ubicación del Puesto/Proyecto</label>
                            <input onChange={handleUbicacion} value={ubicacion} type="text" className="form-control" name="ubicación" placeholder="Ubicación" />
                        </div>
                        <div className="col-6">
                            <label for="">Fecha de Publicación</label>
                            <input onChange={handleFechap} value={fechap} type="date" className="form-control" name="fecha" placeholder="Fecha de Publicación" />
                        </div>
                        <div className="col-6">
                            <label for="">Fecha de Vencimiento</label>
                            <input onChange={handleFechav} value={fechav} type="date" className="form-control" name="fecha" placeholder="Fecha de Vencimiento" />
                        </div>
                        <div className="col-12">
                            <h4 className="contacto" name="contacto">Datos del Contacto</h4>
                        </div>
                        <div className="col-6">
                            <label for="">Nombre</label>
                            <input onChange={handleNombre} value={nombre} type="text" className="form-control" name="nombre" placeholder="Nombre" />
                        </div>
                        <div className="col-6">
                            <label for="">Apellido</label>
                            <input onChange={handleApellido} value={apellido} type="text" className="form-control" name="apellido" placeholder="Apellido" />
                        </div>
                        <div className="col-12">
                            <label for="">Correo de Contacto</label>
                            <input onChange={handleEmail} value={email} type="email" className="form-control" name="correo" placeholder="Correo de Contacto" />
                        </div>

                        <div className="text-danger">
                            {error}
                        </div>

                        {
                            loading &&
                            <div className="spinner-border text-info" role="status">
                            </div>
                        }        
                        <div className="boton">
                            <button onClick={() => publicar()} type="submit" value="send" className="btn btn-primary">Publicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioOferta
