import React from "react";
import styles from "../../imagem/lista/ListaImagens.module.css";
import { Link, NavLink } from "react-router-dom";
import img from "../../../images/Descrição-de-produto-no-e-commerce-1024x538.png";

const ListaImagens = () => {
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
          <li
            className={`${styles.cardlista} border-b text-gray-600 shadow-xl  bg-gray-50 `}
          >
            <Link to="imagem">
              <div>
                <img src={img} />
              </div>
              <div className={`${styles.listaCorpo}  `}>
                <ul>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Nome:</span>{" "}
                    <span className={`${styles.CorpoResposta}`}>
                      imagem de um produto
                    </span>
                  </li>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Produto:</span>

                    <span className={`${styles.CorpoResposta}`}>
                      (1234) Algum Produto
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
          </li>
          <li
            className={`${styles.cardlista} border-b text-gray-600 shadow-xl  bg-gray-50 `}
          >
            <Link to="imagens">
              <div>
                <img src={img} />
              </div>
              <div className={`${styles.listaCorpo}  `}>
                <ul>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Nome:</span>{" "}
                    <span className={`${styles.CorpoResposta}`}>
                      imagem de um produto
                    </span>
                  </li>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Produto:</span>

                    <span className={`${styles.CorpoResposta}`}>
                      (1234) Algum Produto
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
          </li>{" "}
          <li
            className={`${styles.cardlista} border-b text-gray-600 shadow-xl  bg-gray-50 `}
          >
            <Link to="imagens">
              <div>
                <img src={img} />
              </div>
              <div className={`${styles.listaCorpo}  `}>
                <ul>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Nome:</span>{" "}
                    <span className={`${styles.CorpoResposta}`}>
                      imagem de um produto
                    </span>
                  </li>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Produto:</span>

                    <span className={`${styles.CorpoResposta}`}>
                      (1234) Algum Produto
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
          </li>{" "}
          <li
            className={`${styles.cardlista} border-b text-gray-600 shadow-xl  bg-gray-50 `}
          >
            <Link to="imagens">
              <div>
                <img src={img} />
              </div>
              <div className={`${styles.listaCorpo}  `}>
                <ul>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Nome:</span>{" "}
                    <span className={`${styles.CorpoResposta}`}>
                      imagem de um produto
                    </span>
                  </li>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Produto:</span>

                    <span className={`${styles.CorpoResposta}`}>
                      (1234) Algum Produto
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
          </li>{" "}
          <li
            className={`${styles.cardlista} border-b text-gray-600 shadow-xl  bg-gray-50 `}
          >
            <Link to="imagens">
              <div>
                <img src={img} />
              </div>
              <div className={`${styles.listaCorpo}  `}>
                <ul>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Nome:</span>{" "}
                    <span className={`${styles.CorpoResposta}`}>
                      imagem de um produto
                    </span>
                  </li>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Produto:</span>

                    <span className={`${styles.CorpoResposta}`}>
                      (1234) Algum Produto
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
          </li>{" "}
          <li
            className={`${styles.cardlista} border-b text-gray-600 shadow-xl  bg-gray-50 `}
          >
            <Link to="imagens">
              <div>
                <img src={img} />
              </div>
              <div className={`${styles.listaCorpo}  `}>
                <ul>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Nome:</span>{" "}
                    <span className={`${styles.CorpoResposta}`}>
                      imagem de um produto
                    </span>
                  </li>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Produto:</span>

                    <span className={`${styles.CorpoResposta}`}>
                      (1234) Algum Produto
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
          </li>{" "}
          <li
            className={`${styles.cardlista} border-b text-gray-600 shadow-xl  bg-gray-50 `}
          >
            <Link to="imagens">
              <div>
                <img src={img} />
              </div>
              <div className={`${styles.listaCorpo}  `}>
                <ul>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Nome:</span>{" "}
                    <span className={`${styles.CorpoResposta}`}>
                      imagem de um produto
                    </span>
                  </li>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Produto:</span>

                    <span className={`${styles.CorpoResposta}`}>
                      (1234) Algum Produto
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
          </li>{" "}
          <li
            className={`${styles.cardlista} border-b text-gray-600 shadow-xl  bg-gray-50 `}
          >
            <Link to="imagens">
              <div>
                <img src={img} />
              </div>
              <div className={`${styles.listaCorpo}  `}>
                <ul>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Nome:</span>{" "}
                    <span className={`${styles.CorpoResposta}`}>
                      imagem de um produto
                    </span>
                  </li>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Produto:</span>

                    <span className={`${styles.CorpoResposta}`}>
                      (1234) Algum Produto
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
          </li>{" "}
          <li
            className={`${styles.cardlista} border-b text-gray-600 shadow-xl  bg-gray-50 `}
          >
            <Link to="imagens">
              <div>
                <img src={img} />
              </div>
              <div className={`${styles.listaCorpo}  `}>
                <ul>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Nome:</span>{" "}
                    <span className={`${styles.CorpoResposta}`}>
                      imagem de um produto
                    </span>
                  </li>
                  <li>
                    <span className={`${styles.CorpoTitulo}`}>Produto:</span>

                    <span className={`${styles.CorpoResposta}`}>
                      (1234) Algum Produto
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListaImagens;
