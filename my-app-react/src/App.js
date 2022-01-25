import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NavBarApp from "./components/navbar/NavBarApp";
import Footer from "./components/footer/Footer";
import FormProduto from "./components/produto/forms/FormProduto";
import ListaProduto from "./components/produto/lista/ListaProduto";
import Produto from "./components/produto/Produto";
import ListaImagens from "./components/imagem/lista/ListaImagens";
import FormImagem from "./components/imagem/forms/FormImagem";

import style from "./App.module.css";
import Imagem from "./components/imagem/Imagem";

function App() {
  return (
    <Router>
      <div
        className={`${style.container} font-mono scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200`}
      >
        <NavBarApp></NavBarApp>
        <Switch>
          <Route exact path="/">
            <ListaProduto />
          </Route>
          <Route exact path="/produto/cadastrar">
            <FormProduto />
          </Route>
          <Route exact path="/produto/cadastrar/:id">
            <FormProduto />
          </Route>
          <Route exact path="/imagem/cadastrar">
            <FormImagem />
          </Route>
          <Route exact path="/imagem/cadastrar/:id">
            <FormImagem />
          </Route>
          <Route exact path="/imagens">
            <ListaImagens />
          </Route>
          <Route exact path="/produto/:id">
            <Produto />
          </Route>
          <Route exact path="/imagem/:id">
            <Imagem />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
