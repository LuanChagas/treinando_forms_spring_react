import { React, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../../produto/lista/css/ListaProduto.module.css";
import BtnAdicionar from "./BtnAdicionar";
import axios from "axios";


const TabelaProduto = () => {
  const [dadosRequest, setDadosRequest] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/produto`)
      .then(function (response) {
        setDadosRequest(response.data)
      }).catch(function (error) {
        console.log(error);
      })
  }, [])

  function deleteProduto(id) {
    axios.delete(`http://localhost:8080/api/produto/${id}`)
    setDadosRequest(dadosRequest.filter(x => x.id !== id))
  }

  if (!dadosRequest || dadosRequest.length === 0) return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.containerTabela}`}>
          <BtnAdicionar classe={`${styles.btnadd}`}></BtnAdicionar>
          <p className={styles.tituloNull}>Sem dados</p>
        </div>
      </div>
    </>)

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.containerTabela}  `}>
        <NavLink
          to="/produto/cadastrar"
          className={`${styles.btnadd} flex items-center p-4 text-gray-900 bg-indigo-400 rounded-lg shadow-md cursor-pointer hover:bg-indigo-800 hover:text-gray-100`}
        >
          Adicionar
        </NavLink>
        <table
          className={`${styles.tabela} table-auto  shadow-md rounded my-6 `}
        >
          <thead>

            <tr
              className={` ${styles.tabelaTitulo} bg-gray-300 text-gray-600 uppercase `}
            >
              <th>id</th>
              <th>Nome</th>
              <th>Descriçao</th>
              <th>Em Estoque</th>
              <th className={`${styles.acao}`}>Ação</th>
            </tr>
          </thead>
          <tbody className={`${styles.tbody}`}>
            {dadosRequest.map((r) => (
              <tr key={r.id}
                className={` ${styles.tabeladados} border-b text-gray-600 text-sm font-light hover:bg-gray-100`}
              >
                <td>
                  <a href="#">{r.id}</a>
                </td>
                <td>{r.nome}</td>
                <td>{r.descricao}</td>
                <td>{r.estoque ? "Sim" : "Não"}</td>
                <td className={`${styles.acao}`}>
                  <div class="flex item-center justify-center">
                    <Link
                      to={`produto/${r.id}`}
                      class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </Link>
                    <Link
                      to={`/produto/cadastrar/${r.id}`}>

                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                    </Link>
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={() => deleteProduto(r.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
    </div>
  );
}



export default TabelaProduto;
