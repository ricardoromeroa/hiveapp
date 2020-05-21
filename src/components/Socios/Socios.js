import React from 'react';
import '../Footer/Footer.css';
import logoBBVA from '../../assets/png/logo-bbva.png';
import logoBimbo from '../../assets/png/logo-bimbo.png';
import logoCorner from '../../assets/png/logo-corner.png';
import logoGrin from '../../assets/png/logo-grin.png';

const Socios = () => {
    return (
        <section>
            <div className="logos-bg">
                <div className="container logos-text">
                    <h3 className="">Nuestros socios</h3>
                </div>
            </div>
            <div>
                <div className="logos-img">
                    <div>
                        <a href="https://www.bbva.mx/">
                            <img className="logo-size" src={logoBBVA} alt="Logo BBVA" />
                        </a>
                    </div>
                    <div>
                        <a href="https://grupobimbo.com/es">
                            <img className="logo-size" src={logoBimbo} alt="Logo Bimbo" />
                        </a>
                    </div>
                    <div>
                        <a href="https://cornershopapp.com/es/">
                            <img className="logo-size" src={logoCorner} alt="Logo Corner Shop" />
                        </a>
                    </div>
                    <div>
                        <a href="https://ongrin.com/">
                            <img className="logo-size" src={logoGrin} alt="Logo Grin" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Socios
