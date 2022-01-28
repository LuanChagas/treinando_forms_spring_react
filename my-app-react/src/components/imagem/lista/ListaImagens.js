import React, { useState, useEffect } from "react";
import styles from "../../imagem/lista/ListaImagens.module.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";


const ListaImagens = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/imagem`)
      .then(function (response) {
        setDados(response.data)
      }).catch(function (error) {
        console.log(error);
      })
  }, [])

  if (!dados) return null;
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.containerTabela}  `}>
        <NavLink
          to="/imagem/cadastrar"
          className={`${styles.btnadd} flex items-center p-4 text-gray-900 bg-indigo-400 rounded-lg shadow-md cursor-pointer hover:bg-indigo-800 hover:text-gray-100`}
        >
          Adicionar
        </NavLink>
        <ul className={`${styles.lista}`}>
          {dados.map(r => (
            <li className={`${styles.cardlista} border-b text-gray-600 shadow-xl  bg-gray-50 `}>
              <Link to={`imagem/${r.id}`}>
                <div>
                  <img src={r.caminho} />
                </div>
                <div className={`${styles.listaCorpo}  `}>
                  <ul>
                    <li>
                      <span className={`${styles.CorpoTitulo}`}>Nome:</span>{" "}
                      <span className={`${styles.CorpoResposta}`}>
                        {r.nome}
                      </span>
                    </li>
                    <li>
                      <span className={`${styles.CorpoTitulo}`}>Produto:</span>

                      <span className={`${styles.CorpoResposta}`}>
                        ({r.produto.id}) {r.produto.nome}
                      </span>
                    </li>
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaImagens;
