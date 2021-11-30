package com.luan.app.DTOs;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.luan.app.entidades.Produto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProdutoDTO {
       private Long id;
       private String nome;
       private BigDecimal preco;
       private String descricao;
       private Boolean estoque;

       @JsonIgnoreProperties({ "produto" })
       private List<ImagemDTO> imagens = new ArrayList<ImagemDTO>();

       public ProdutoDTO(Produto p) {
              this.id = p.getId();
              this.nome = p.getNome();
              this.preco = p.getPreco();
              this.descricao = p.getDescricao();
              this.estoque = p.getEstoque();
              this.imagens = p.getImagens().stream().map(x -> new ImagemDTO(x)).collect(Collectors.toList());
       }

       public void addFoto(ImagemDTO img) {
              if (img == null) {
                     imagens = new ArrayList<ImagemDTO>();
              }
              if (img != null) {
                     imagens.add(img);
                     img.setProduto(this);
              }
       }

}
