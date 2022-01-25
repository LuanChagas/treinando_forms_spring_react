import { React, useEffect, useState } from "react";
import { Link, useParams,NavLink } from "react-router-dom";
import styles from "./Produto.module.css";
import axios from "axios";

const Produto = () => {
  const { id } = useParams();
  const [dadosProduto, setDadosProduto] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/produto/${id}`)
      .then(function (response) {
        setDadosProduto(response.data)
        console.log(dadosProduto)
      }).catch(function (error) {
        console.log(error);
      })
  }, [])

  if (!dadosProduto) return null;
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
                    <a href="#">{dadosProduto.id}</a>
                  </td>
                  <td>{dadosProduto.nome}</td>
                  <td>{dadosProduto.preco}</td>
                  <td>{dadosProduto.descricao}</td>
                  <td>{dadosProduto.estoque ? "Sim" : "Não"}</td>
                </tr>
              </tbody>
            </table>
            <div className={`${styles.imagens} `}>
              <ul>
                {dadosProduto.imagens.map(r => (
                  <li className={` shadow-lg`}>
                    <NavLink exact to={`/imagem/${r.id}`}>
                      <div>
                        <img src={r.caminho} />
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;
