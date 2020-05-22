import React, { useEffect, useState } from 'react'
import Dashboard from "../../components/Dashboard/Dashboard";
import Navbar from "../../components/Navbar/Navbar";
import "./DashboardContainer.css"
import axios from 'axios';

const DashboardContainer = () => {

    const [Perfil, setPerfil] = useState({});
    const key = "hive-crud"

    const getPerfil = () => {
        axios.get(`https://${key}.firebaseio.com/signup.json`)
            .then(({ data }) => setPerfil(data));
    }

    useEffect(() => {
        getPerfil();
    }, [])


    return (
        <section className="fondo">
            <Navbar />
            <div className="container">
                {Object.keys(Perfil).map((id) =>
                    <Dashboard
                        key={id}
                        name={Perfil[id].name}
                        email={Perfil[id].email}
                        id={id}
                        getPerfil={getPerfil}
                    />)}
            </div>
        </section>
    )
}


export default DashboardContainer
