package com.luan.app.DTOs;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.luan.app.entidades.Imagem;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ImagemDTO {
       private Long id;
       private String nome;
       private String descricao;
       private String caminho;

       @JsonIgnoreProperties({ "imagens", "preco", "estoque", "descricao" })
       private ProdutoDTO produto;

       public ImagemDTO(Imagem img) {
              this.id = img.getId();
              this.nome = img.getNome();
              this.descricao = img.getDescricao();
              this.caminho = img.getCaminho();
              this.produto = new ProdutoDTO();
              this.produto.setId(img.getProduto().getId());
              this.produto.setNome(img.getProduto().getNome());
       }

}
