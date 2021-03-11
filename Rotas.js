import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Inicio from "./pages/Inicio/index";
import Header from "./componente/header";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Inicio} />
      </Switch>
    </BrowserRouter>
  );
}
