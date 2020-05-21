import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Importar containers
import aboutUs from './containers/aboutUs/aboutUs';
import autenticacion from './containers/autenticacion/autenticacion';
import formularioOferta from './containers/formularioOferta/formularioOferta';
import mainContainer from './containers/mainContainer/mainContainer';
import perfilUsuario from './containers/perfilUsuario/perfilUsuario';
import referenciasEmpresa from './containers/referenciasEmpresa/referenciasEmpresa';
import referenciasFreelancer from './containers/referenciasFreelancer/referenciasFreelancer';
//Importar estilos
import './App.css';

import AuthContainer from "./containers/AuthContainer/AuthContainer"


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={mainContainer} />
          <Route exact path="/about_us" component={aboutUs} />
          <Route exact path="/auth" component={AuthContainer} />
          <Route exact path="/formulario_oferta" component={formularioOferta} />
          <Route exact path="/perfil_usuario" component={perfilUsuario} />
          <Route exact path="/referencias_empresa" component={referenciasEmpresa} />
          <Route exact path="/referencias_freeelancer" component={referenciasFreelancer} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
  );
}

export default App;
