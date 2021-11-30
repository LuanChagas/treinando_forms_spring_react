package com.luan.app.services;

import java.util.List;
import java.util.Optional;

import com.luan.app.entidades.Produto;
import com.luan.app.repositorios.ProdutoRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdutoServices {

       @Autowired
       private ProdutoRepositorio produtoRepositorio;

       public Produto createProduto(Produto produto) {
              return produtoRepositorio.save(produto);
       }

       public List<Produto> obterProdutos() {
              return produtoRepositorio.findAll();
       }

       public Optional<Produto> obterProdutoId(Long id) {
              return produtoRepositorio.findById(id);
       }

}
