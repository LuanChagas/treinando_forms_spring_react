import React, { useState } from "react";
import styles from "./FormProduto.module.css";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

let dadosInicial = {
  nome: "",
  preco: "",
  descricao: "",
  estoque: "",
};

const FormProduto = () => {

  const { id } = useParams();
  const [dados, setDados] = useState(dadosInicial);

  if (!id) {
    dadosInicial = {};
  }

  function mudarDados(e, setDados, dados) {

    if (e.target.name === "produto") {
      let produto = {
        "id": e.target.value
      }
      setDados({
        ...dados, [e.target.name]: produto
      })
    } else {
      setDados({
        ...dados, [e.target.name]: e.target.value
      })
    }
    console.log(dados)
  }



  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`http://localhost:8080/api/produto`, {
      ...dados
    }).then(function (response) {
    })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <NavLink
          to="/"
          className={`${styles.btnvoltar} flex items-center p-4 text-gray-900 bg-indigo-400 rounded-lg shadow-md cursor-pointer hover:bg-indigo-800 hover:text-gray-100`}
        >
          Voltar
        </NavLink>
        <form
          className="border-b text-gray-600 shadow-xl text-sm bg-gray-50"
          onSubmit={handleSubmit}
        >
          <fieldset className={styles.formNome}>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value={dadosInicial.nome} onChange={mudarDados} />
          </fieldset>
          <fieldset className={styles.formPreco}>
            <label for="preco">Preço:</label>
            <input
              type="text"
              id="preco"
              name="preco"
              value={dadosInicial.preco}
              onChange={mudarDados}
            />
          </fieldset>
          <fieldset className={styles.formDescricao}>
            <label for="descricao">Descrição:</label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              value={dadosInicial.descricao}
              onChange={mudarDados}
            />
          </fieldset>
          <fieldset className={styles.formEstoque}>
            <h5>Tem em estoque? </h5>
            <div>
              <label for="sim">Sim</label>

              <input
                type="radio"
                id="sim"
                name="estoque"
                value="true"
                onChange={mudarDados}

              />
            </div>
            <div>
              <label for="nao">Não</label>
              <input
                type="radio"
                id="nao"
                name="estoque"
                value="false"
                onChange={mudarDados}

              />
            </div>
          </fieldset>

          <fieldset className={`${styles.formBtn}`}>
            <button
              type="submit"
              className="text-gray-900 bg-indigo-400 rounded-lg shadow-md cursor-pointer hover:bg-indigo-800 hover:text-gray-100"
            >
              <h1>Cadastrar</h1>
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default FormProduto;
