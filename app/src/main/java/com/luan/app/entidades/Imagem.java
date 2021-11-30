package com.luan.app.entidades;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

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
@Entity
@Table(name = "imagem")
public class Imagem {
       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       private Long id;
       private String nome;
       private String descricao;
       private String caminho;

       @ManyToOne
       @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
       @JoinColumn(name = "id_produto")
       @JsonIgnoreProperties({ "imagens", "descricao", "preco", "estoque" })
       private Produto produto;
}
