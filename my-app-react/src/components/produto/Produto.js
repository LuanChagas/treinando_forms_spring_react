import React from "react";
import styles from "./Produto.module.css";
import { NavLink, Link, useParams } from "react-router-dom";
import img from "../../images/Descrição-de-produto-no-e-commerce-1024x538.png";

const Produto = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.containerContent}`}>
        <div className={`${styles.btns}`}>
          <div className={`${styles.btnCrud}`}>
            <Link
              to="produto/cadastrar/5"
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
            <table
              className={`${styles.tabela} table-auto  shadow-md rounded my-6 `}
            >
              <thead>
                <tr
                  className={` ${styles.tabelaTitulo} bg-gray-300 text-gray-600 uppercase `}
                >
                  <th>id</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Descriçao</th>
                  <th>Em Estoque</th>
                </tr>
              </thead>
              <tbody className={`${styles.tbody}`}>
                <tr
                  className={` ${styles.tabeladados} border-b text-gray-600 text-sm font-light `}
                >
                  <td>
                    <a href="#">1</a>
                  </td>
                  <td>Celular</td>
                  <td>R$ 1500.00</td>
                  <td>Um produto de ponta</td>
                  <td>sim</td>
                </tr>
              </tbody>
            </table>
            <div className={`${styles.imagens} `}>
              <ul>
                <li className={` shadow-lg`}>
                  <Link to="imagens">
                    <div>
                      <img src={img} />
                    </div>
                  </Link>
                </li>
                <li className={` shadow-lg`}>
                  <Link to="imagens">
                    <div>
                      <img src={img} />
                    </div>
                  </Link>
                </li>
                <li className={` shadow-lg`}>
                  <Link to="imagens">
                    <div>
                      <img src={img} />
                    </div>
                  </Link>
                </li>
                <li className={` shadow-lg`}>
                  <Link to="imagens">
                    <div>
                      <img src={img} />
                    </div>
                  </Link>
                </li>
                <li className={` shadow-md`}>
                  <Link to="imagens">
                    <div>
                      <img src={img} />
                    </div>
                  </Link>
                </li>
                <li className={` shadow-md`}>
                  <Link to="imagens">
                    <div>
                      <img src={img} />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;
