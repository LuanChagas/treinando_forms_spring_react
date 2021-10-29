import React from "react";
import styles from "../imagem/Imagem.module.css";
import { Link } from "react-router-dom";
import img from "../../images/Descrição-de-produto-no-e-commerce-1024x538.png";

let dadosEditar = {
  nome: "Nome da foto",
  produto: "(1234) Produto",
  descricao: "Foto de um produto",
};

const Imagem = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.containerContent}`}>
        <div className={`${styles.btns}`}>
          <div className={`${styles.btnCrud}`}>
            <Link
              to="imagem/cadastrar/1"
              className={`${styles.btnEditar} flex items-center p-4 text-gray-900 bg-green-400 rounded-lg shadow-md cursor-pointer hover:bg-green-800 hover:text-gray-100`}
            >
              Editar
            </Link>
            <Link
              to=""
              className={`${styles.btnExcluir} flex items-center p-4 text-gray-900 bg-red-400 rounded-lg shadow-md cursor-pointer hover:bg-red-800 hover:text-gray-100`}
            >
              Excluir
            </Link>
          </div>
          <Link
            to=""
            className={`${styles.btnVoltar} flex items-center p-4 text-gray-900 bg-indigo-400 rounded-lg shadow-md cursor-pointer hover:bg-indigo-800 hover:text-gray-100`}
          >
            Voltar
          </Link>
        </div>
        <div className={`${styles.dados}`}>
          <div className={`${styles.card}`}>
            {" "}
            <table
              className={`${styles.tabela} table-auto  shadow-md rounded my-6 `}
            >
              <thead>
                <tr
                  className={` ${styles.tabelaTitulo} bg-gray-300 text-gray-600 uppercase `}
                >
                  <th>id</th>
                  <th>Nome</th>
                  <th>Produto</th>
                  <th>Descriçao</th>
                </tr>
              </thead>
              <tbody className={`${styles.tbody}`}>
                <tr
                  className={` ${styles.tabeladados} border-b text-gray-600 text-sm font-light `}
                >
                  <td>
                    <a href="#">1</a>
                  </td>
                  <td>Nome da foto</td>
                  <td>(1234) Produto</td>
                  <td>Foto de um produto</td>
                </tr>
              </tbody>
            </table>
            <div className={`${styles.imagem}  shadow-md`}>
              <img src={img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagem;
