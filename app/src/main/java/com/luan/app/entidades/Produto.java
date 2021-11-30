package com.luan.app.entidades;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(name = "produto")
public class Produto {

       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       private Long id;

       private String nome;
       private BigDecimal preco;
       private String descricao;
       private Boolean estoque;
       @JsonManagedReference
       @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
       @OneToMany(mappedBy = "produto", cascade = CascadeType.ALL)

       private List<Imagem> imagens;

       public void addFoto(Imagem img) {
              if (img == null) {
                     imagens = new ArrayList<Imagem>();
              }
              if (img != null) {
                     imagens.add(img);
                     img.setProduto(this);
              }
       }

}
