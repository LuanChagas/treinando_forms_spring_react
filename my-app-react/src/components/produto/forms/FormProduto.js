import React from "react";
import styles from "./FormProduto.module.css";
import { NavLink, useParams } from "react-router-dom";

let dadosEditar = {
  nome: "celular",
  preco: "1500.00",
  descricao: "Um produto de Ponta",
  estoque: "true",
};

const FormProduto = () => {
  const { id } = useParams();
  if (!id) {
    dadosEditar = {};
  }
  console.log(dadosEditar);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
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
            <input type="text" id="nome" name="nome" value={dadosEditar.nome} />
          </fieldset>
          <fieldset className={styles.formPreco}>
            <label for="nome">Preço:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={dadosEditar.preco}
            />
          </fieldset>
          <fieldset className={styles.formDescricao}>
            <label for="descricao">Descrição:</label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              value={dadosEditar.descricao}
            />
          </fieldset>
          <fieldset className={styles.formEstoque}>
            <h5>Tem em estoque? </h5>
            <div>
              <label for="sim">Sim</label>

              <input
                type="radio"
                id="sim"
                name="estoqueradio"
                value="true"
                checked={dadosEditar.estoque === "true" ? true : false}
              />
            </div>
            <div>
              <label for="nao">Não</label>
              <input
                type="radio"
                id="nao"
                name="estoqueradio"
                value="false"
                checked={!dadosEditar.estoque === "true" ? true : false}
              />
            </div>
          </fieldset>
          <fieldset className={styles.formImagens}>
            <label for="">Escolha algumas imagens para o produto</label>
            <input type="file" id="imagens" name="file" multiple />
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
