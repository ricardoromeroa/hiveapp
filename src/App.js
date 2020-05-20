import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import AuthContainer from "./containers/AuthContainer/AuthContainer"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={AuthContainer} />

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
