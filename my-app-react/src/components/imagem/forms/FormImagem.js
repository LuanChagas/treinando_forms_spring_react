import React, { useEffect, useState } from "react";
import styles from "../forms/FormImagem.module.css";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import storage from "../../../Utils/FirebaseConfig";
import { getDownloadURL } from "firebase/storage"


let dadosImagem = {
  "nome": "",
  "descricao": "",
  "caminho": "",
  "produto": {
    "id": ""
  }
};

const Imagem = () => {
  const { id } = useParams();
  const [dados, setDados] = useState(dadosImagem);
  const [dadosProduto, setDadosProduto] = useState("")

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/imagem/${id}`)
        .then(function (response) {
          setDados(response.data)
        }).catch(function (error) {
          console.log(error);
        })
    }

    axios.get(`http://localhost:8080/api/produto/id_nome`)
      .then(function (response) {
        setDadosProduto(response.data)
      }).catch(function (error) {
        console.log(error);
      })


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function mudarDados(e) {

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

  function enviarParaStorage(file, e) {

    let ext = file.name.split(".")
    let nomeArquivo = `twate.${ext[1]}`;
    let storageRef = storage.ref(`images/${nomeArquivo.split(" ").join("")}`)
    let uploadTask = storageRef.put(file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          e.target.file.value = ""
          enviarParaOBD(downloadURL)
        });
      }
    );
  };

  function enviarParaOBD(url) {
    if (id) {
      axios.put(`http://localhost:8080/api/imagem/`, { ...dados, caminho: url })
    }
    axios.post(`http://localhost:8080/api/imagem`, {
      ...dados,
      caminho: url
      /*  nome: dados.nome,
        descricao: dados.descricao,
        caminho: url,
        produto: {
          id: dados.produto.id
        } */
    }).then(function (response) {
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (id) {
      if (e.target.file.files[0]) {
        enviarParaStorage(e.target.file.files[0], e)
      } else {
        axios.put(`http://localhost:8080/api/imagem/`, dados)
      }

    } else {
      enviarParaStorage(e.target.file.files[0], e)
    }

    setDados(dadosImagem)
  }

  if (!dadosProduto) return null;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <NavLink
          to="/imagens"

          className={`${styles.btnvoltar} flex items-center p-4 text-gray-900 bg-indigo-400 rounded-lg shadow-md cursor-pointer hover:bg-indigo-800 hover:text-gray-100`}
        >
          Voltar
        </NavLink>
        <form className="border-b text-gray-600 shadow-xl text-sm bg-gray-50" onSubmit={handleSubmit}>
          <fieldset className={styles.formNome}>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value={dados.nome} onChange={mudarDados} />
          </fieldset>
          <fieldset className={styles.formProduto}>
            <label for="produto">Produto:</label>
            <select name="produto" id="produto" value={dados.produto.id} onChange={mudarDados}>
              <option value="" select>
                Escolha um produto
              </option>
              {
                dadosProduto.map(r => (
                  <option name="produto" id="produto" value={r.id}>({r.id}) {r.nome}</option>
                ))}
            </select>
          </fieldset>
          <fieldset className={styles.formDescricao}>
            <label for="descricao">Descrição:</label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              value={dados.descricao}
              onChange={mudarDados}
            />
          </fieldset>
          <fieldset className={styles.formImagens}>
            {
              id ?
                <label for="">Clique caso queira cadastrar uma nova imagem</label>
                :
                <label for="">Escolha alguma imagem para o produto</label>
            }
            <input type="file" id="file" name="file" ></input>
          </fieldset>
          <fieldset className={`${styles.formBtn}`}>
            <button
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