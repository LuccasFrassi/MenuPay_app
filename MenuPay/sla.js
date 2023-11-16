// App.js

import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ConsultaParcelas from "./ConsultaParcelas";
import SeguradorasList from "./SeguradorasList";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/">Início</Link>
          <Link to="/consultar">Consultar Parcelas</Link>
          <Link to="/seguradoras">Seguradoras</Link>
        </nav>
        <Switch>
          <Route path="/consultar">
            <ConsultaParcelas />
          </Route>
          <Route path="/seguradoras">
            <SeguradorasList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Bem-vindo à Página Inicial</h1>;
}

export default App;
