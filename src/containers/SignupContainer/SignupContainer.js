import React from 'react'
import AuthSignup from "../../components/authSignup/AuthSignup"
import "./SignupContainer.css"

const SignupContainer = () => {
    return (
        <section className="fondo">
            <div className="container">
                <AuthSignup />
            </div>
        </section>
    )
}

export default SignupContainer
