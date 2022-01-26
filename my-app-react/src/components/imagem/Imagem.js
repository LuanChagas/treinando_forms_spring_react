import { React, useEffect, useState } from "react";
import styles from "../imagem/Imagem.module.css";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios"

let dadosEditar = {
  nome: "Nome da foto",
  produto: "(1234) Produto",
  descricao: "Foto de um produto",
};

const Imagem = () => {
  const { id } = useParams();
  const [dadosImagem, setDadosImagem] = useState(null)
  const [vazio, setVazio] = useState(false)

  useEffect(() => {
    getImagem(id)
  }, [])

  function getImagem() {
    axios.get(`http://localhost:8080/api/imagem/${id}`)
      .then(function (response) {
        setDadosImagem(response.data)
        console.log(dadosImagem)
      }).catch(function (error) {
        console.log(error);
      })
  }

  function deleteImagemById(id) {
    axios.delete(`http://localhost:8080/api/imagem/${id}`)
    setVazio(!vazio)
  }

  if (!dadosImagem || vazio) return <>
    <Link
      to="/imagens"
      exact={true}
      className={`${styles.btnVoltar} flex items-center p-4 text-gray-900 bg-indigo-400 rounded-lg shadow-md cursor-pointer hover:bg-indigo-800 hover:text-gray-100`}
    >
      Voltar
    </Link>
  </>;
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.containerContent}`}>
        <div className={`${styles.btns}`}>
          <div className={`${styles.btnCrud}`}>
            <NavLink
              to={`cadastrar/${id}`}
              className={`${styles.btnEditar} flex items-center p-4 text-gray-900 bg-green-400 rounded-lg shadow-md cursor-pointer hover:bg-green-800 hover:text-gray-100`}
            >
              Editar
            </NavLink>
            <button
              onClick={() => { deleteImagemById(dadosImagem.id) }}
              className={`${styles.btnExcluir} flex items-center p-4 text-gray-900 bg-red-400 rounded-lg shadow-md cursor-pointer hover:bg-red-800 hover:text-gray-100`}
            >
              Excluir
            </button>
          </div>
          <Link
            to="/imagens"
            exact={true}
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
                    {dadosImagem.id}
                  </td>
                  <td>{dadosImagem.nome}</td>
                  <td>({dadosImagem.produto.id}) {dadosImagem.produto.nome}</td>
                  <td>{dadosImagem.descricao}</td>
                </tr>
              </tbody>
            </table>
            <div className={`${styles.imagem}  shadow-md`}>
              <img src={dadosImagem.caminho} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagem;
