import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Importar containers
import aboutUs from './containers/aboutUs/aboutUs';
import AuthContainer from "./containers/AuthContainer/AuthContainer"
import SignupContainer from "./containers/SignupContainer/SignupContainer"
import OfertaContainer from './containers/OfertaContainer/OfertaContainer';
import mainContainer from './containers/mainContainer/mainContainer';
import perfilUsuario from './containers/perfilUsuario/perfilUsuario';
import referenciasEmpresa from './containers/referenciasEmpresa/referenciasEmpresa';
import referenciasFreelancer from './containers/referenciasFreelancer/referenciasFreelancer';
//Importar estilos
import './App.css';




function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={mainContainer} />
          <Route exact path="/about_us" component={aboutUs} />
          <Route exact path="/auth" component={AuthContainer} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/formulario_oferta" component={OfertaContainer} />
          <Route exact path="/perfil_usuario" component={perfilUsuario} />
          <Route exact path="/referencias_empresa" component={referenciasEmpresa} />
          <Route exact path="/referencias_freeelancer" component={referenciasFreelancer} />

          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
  );
}

export default App;
