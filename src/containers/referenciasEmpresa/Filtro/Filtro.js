import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './Filtro.css';

const Filtro = () => {
    return (
        <div>

            <div className="">
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h4>Filtros</h4>
                            <div className="search-bar">
                                <input type="text" placeholder="Buscar..." />
                                <i className="fas fa-search"></i>
                            </div>

                            <div className="filtro-opciones">
                                <DropdownButton variant="ligth" id="dropdown-item-button" title="Salario">
                                    <Dropdown.Item as="button">Mas de $5,000.00</Dropdown.Item>
                                    <Dropdown.Item as="button">Mas de $10,000.00</Dropdown.Item>
                                    <Dropdown.Item as="button">Mas de $15,000.00</Dropdown.Item>
                                    <Dropdown.Item as="button">Mas de $20,000.00</Dropdown.Item>
                                </DropdownButton>
                            </div>

                            <div className="dropdown-divider"></div>

                            <div className="filtro-opciones">
                                <DropdownButton variant="ligth" id="dropdown-item-button" title="Ubicación">
                                    <Dropdown.Item as="button">Ciudad de México</Dropdown.Item>
                                    <Dropdown.Item as="button">Bogotá</Dropdown.Item>
                                    <Dropdown.Item as="button">San Salvador</Dropdown.Item>
                                    <Dropdown.Item as="button">Remoto</Dropdown.Item>
                                </DropdownButton>
                            </div>

                            <div className="dropdown-divider"></div>

                            <div className="filtro-opciones">
                                <DropdownButton variant="ligth" id="dropdown-item-button" title="Habilidades">
                                    <Dropdown.Item as="button">Software Development</Dropdown.Item>
                                    <Dropdown.Item as="button">Javascript</Dropdown.Item>
                                    <Dropdown.Item as="button">HTML/CSS</Dropdown.Item>
                                    <Dropdown.Item as="button">PHP</Dropdown.Item>
                                </DropdownButton>
                            </div>

                            <div className="dropdown-divider"></div>

                            <div className="filtro-opciones">
                                <DropdownButton variant="ligth" id="dropdown-item-button" title="Tipo de trabajo">
                                    <Dropdown.Item as="button">Empleo de Tiempo Completo</Dropdown.Item>
                                    <Dropdown.Item as="button">Empleo de Medio Tiempo</Dropdown.Item>
                                    <Dropdown.Item as="button">Trabajos Temporales/Freelance</Dropdown.Item>
                                    <Dropdown.Item as="button">Pasantias/Practicas</Dropdown.Item>
                                </DropdownButton>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default Filtro
