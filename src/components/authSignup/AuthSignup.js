import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom';
import axios from "axios";
import "./AuthSignup.css"
import logo from '../../assets/png/hive.png';

const AuthSignup = () => {
    const PROJECT = "hive-crud"

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordc, setPasswordc] = useState("");
    const [check, setCheck] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handlePasswordc = (e) => {
        console.log(e.target.value);
        setPasswordc(e.target.value);
    }

    const handleCheck = () => {
        setCheck(!check);
    }

    const signUp = () => {
        setLoading(true);
        if (password === passwordc) {
            // && check === !check)  {
            const body = {
                check: !check,
                name: name,
                email: email,
                password: password,
                passwordc: passwordc
            }
            axios.post(`https://${PROJECT}.firebaseio.com/login.json`, body)
                .then(() => {
                    history.push("/auth");
                })
                .catch(() => {
                    setLoading(false);
                    setError("las contraseñas ingresadas no coinciden");
                });
        } else {
            setLoading(false);
            setError("Verifica que la información sea correcta");
        }
    };


    return (
        <div className="auth">
            <div>
                <div>
                    <div className="card col-12">
                        <Link to ="/" className="logo"><img src={logo} />
                        </Link>

                        <div class="form-group">
                            <label className="label" for="username1">Nombre de Usuario</label>
                            <input onChange={handleName} value={name} type="text" name="name" className="form-control" id="username1" aria-describedby="usuario"
                                placeholder="Ingresa Nombre de Usuario" />
                            <label className="label" name="email" for="exampleInputEmail1">Correo Electrónico</label>
                            <input onChange={handleEmail} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Ingresa Correo Electrónico" />
                                <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu información personal.</small>
                        </div>
                        <div className="form-group">
                            <label className="label" for="exampleInputPassword1">Contraseña</label>
                            <input onChange={handlePassword} value={password} type="password" className="form-control" id="exampleInputPassword1"
                                placeholder="Ingresa Contraseña" />
                            <label className="label" for="exampleInputPassword1">Confirma Contraseña</label>
                            <input onChange={handlePasswordc} value={passwordc} type="password" className="form-control" id="exampleInputPassword1"
                                placeholder="Confirma Contraseña" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={check} onChange={handleCheck} />
                            <label  checked={check} className="form-check-label" for="exampleCheck1">Acepto los <a href="useragreemnt.html">Términos
                            y condiciones</a> y <a href="privacypolicy.html">Politicas de Privacidad</a>de HIVE</label>
                        </div>
                        <div className="text-danger">
                            {error}
                        </div>
                        {
                            loading &&
                            <div className="spinner-border text-info" role="status">
                            </div>
                        }
                        <button onClick={() => signUp()} type="submit" value="send" className="btn btn-primary text-center">Regístrate a HIVE</button>
                        <p class="ingresa">¿Ya tienes cuenta? <Link to="auth">Ingresa Aquí</Link></p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AuthSignup