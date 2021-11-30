package com.luan.app.Utils;

import java.util.ArrayList;
import java.util.stream.Collectors;

import com.luan.app.DTOs.ImagemDTO;
import com.luan.app.DTOs.ProdutoDTO;
import com.luan.app.entidades.Imagem;
import com.luan.app.entidades.Produto;

public class DTOparaEntidades {

       public static Produto ProdutoDTOparaProduto(ProdutoDTO p) {
              Produto produto = Produto.builder().id(p.getId()).nome(p.getNome()).descricao(p.getDescricao())
                            .preco(p.getPreco()).estoque(p.getEstoque()).imagens(new ArrayList<Imagem>()).build();

              produto.setImagens(p.getImagens().stream()
                            .map(x -> Imagem.builder().nome(x.getNome()).descricao(x.getDescricao())
                                          .caminho(x.getCaminho()).produto(produto).build())
                            .collect(Collectors.toList()));
              return produto;
       }

       public static Imagem ImagemDTOparaProduto(ImagemDTO img) {
              Imagem imagem = Imagem.builder().id(img.getId()).nome(img.getNome()).descricao(img.getDescricao())
                            .caminho(img.getCaminho()).build();
              if (img.getProduto() != null) {
                     imagem.setProduto(ProdutoDTOparaProduto(img.getProduto()));
              }
              return imagem;
       }
}
