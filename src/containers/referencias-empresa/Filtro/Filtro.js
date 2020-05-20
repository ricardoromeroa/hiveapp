import React from 'react'

const Filtro = () => {
    return (
        <div>

            <div className="buscador-filtro col-md-4 col-lg-3 d-none d-md-block">
                <div>
                    <div className="card filtro">
                        <div class="card-body">
                            <h4>Filtros</h4>
                            <div className="search-bar">
                                <input type="text" placeholder="Buscar..." />
                                <i className="fas fa-search"></i>
                            </div>

                            <div className="filtro-opciones">
                                <button className="dropdown-btn">Salario
                                    <i className="fas fa-caret-down"></i>
                                </button>
                                <div className="dropdown-container">
                                    <p>Mas de $5,000.00</p>
                                    <p>Mas de $10,000.00</p>
                                    <p>Mas de $15,000.00</p>
                                    <p>Mas de $20,000.00</p>
                                </div>

                                <div className="dropdown-divider"></div>

                                <button className="dropdown-btn">Ubicación
                                    <i className="fas fa-caret-down"></i>
                                </button>
                                <div className="dropdown-container">
                                    <p>Ciudad de México</p>
                                    <p>Jalisco</p>
                                    <p>Nuevo León</p>
                                    <p>Sonora</p>
                                    <p>Remoto</p>
                                </div>

                                <div className="dropdown-divider"></div>

                                <button className="dropdown-btn">Habilidades
                                    <i className="fas fa-caret-down"></i>
                                </button>
                                <div className="dropdown-container">
                                    <p>Software Development</p>
                                    <p>Javascript</p>
                                    <p>HTML/CSS</p>
                                    <p>PHP</p>
                                </div>

                                <div className="dropdown-divider"></div>

                                <button className="dropdown-btn">Tipo de Trabajo
                                    <i className="fas fa-caret-down"></i>
                                </button>
                                <div className="dropdown-container">
                                    <p>Empleo de Tiempo Completo</p>
                                    <p>Empleo de Medio Tiempo</p>
                                    <p>Trabajos Temporales/Freelance</p>
                                    <p>Pasantias/Practicas</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
        
    )
}

export default Filtro
