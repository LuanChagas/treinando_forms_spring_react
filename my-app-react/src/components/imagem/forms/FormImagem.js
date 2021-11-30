import React from "react";
import styles from "../forms/FormImagem.module.css";
import { NavLink, useParams } from "react-router-dom";

let dadosEditar = {
  nome: "Nome da foto",
  produto: "produto1",
  descricao: "Foto de um produto",
};

const Imagem = () => {
  const { id } = useParams();
  if (!id) {
    dadosEditar = {};
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.foto.value);
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
        <form className="border-b text-gray-600 shadow-xl text-sm bg-gray-50">
          <fieldset className={styles.formNome}>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value={dadosEditar.nome} />
          </fieldset>
          <fieldset className={styles.formProduto}>
            <label for="produto">Produto:</label>
            <select name="produto" id="produto" value={dadosEditar.produto}>
              <option value="" select>
                Escolha um produto
              </option>
              <option value="produto1">(1234) produto 1</option>
              <option value="produto2">(1234) produto 2</option>
              <option value="produto3">(1234) produto 3</option>
              <option value="produto4">(1234) produto 4</option>
              <option value="produto5">(1234) produto 5</option>
              <option value="produto6">(1234) produto 6</option>
            </select>
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
          <fieldset className={styles.formImagens}>
            <label for="">Escolha algumas imagens para o produto</label>
            <input type="file" id="files" name="files"></input>
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

export default Imagem;