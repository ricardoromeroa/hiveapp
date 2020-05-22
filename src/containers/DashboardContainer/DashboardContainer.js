import React from 'react'
import Dashboard from "../../components/Dashboard/Dashboard";
import Navbar from "../../components/Navbar/Navbar";
import "./DashboardContainer.css"




const DashboardContainer = () => {
    return (
        <section className="fondo">
            <Navbar />
            <div className="container">
                <Dashboard />
            </div>
        </section>
    )
}

export default DashboardContainer
