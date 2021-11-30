package com.luan.app.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import com.luan.app.DTOs.ImagemDTO;
import com.luan.app.Utils.DTOparaEntidades;
import com.luan.app.entidades.Imagem;
import com.luan.app.entidades.Produto;
import com.luan.app.services.ImagemServices;
import com.luan.app.services.ProdutoServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/imagem")
public class ImagemController {

       @Autowired
       private ImagemServices imagemServices;

       @Autowired
       private ProdutoServices produtoServices;

       @PostMapping
       public String createImagem(@RequestBody ImagemDTO imagemDTO) {
              try {
                     Imagem imagem = DTOparaEntidades.ImagemDTOparaProduto(imagemDTO);
                     Optional<Produto> produto = produtoServices.obterProdutoId(imagemDTO.getProduto().getId());
                     imagem.setProduto(produto.get());
                     imagemServices.CreateImagem(imagem);
              } catch (Exception e) {
                     return e.getMessage();
              }
              return "Imagem criada com sucesso!";
       }

       @GetMapping
       public ResponseEntity<List<ImagemDTO>> obterImagens() {

              return ResponseEntity.ok(imagemServices.obterImagens().stream().map(x -> {
                     Optional<Produto> produto = Optional.ofNullable(x.getProduto());
                     if (!produto.isPresent()) {
                            x.setProduto(new Produto());
                            x.getProduto().setId(0l);
                            x.getProduto().setNome("Produto não associado");
                     }
                     return new ImagemDTO(x);
              }).collect(Collectors.toList()));
       }

       @GetMapping("/{id}")
       public ResponseEntity<ImagemDTO> obterImagemPorId(@PathVariable("id") Long id) {
              return ResponseEntity.ok(new ImagemDTO(imagemServices.obterImagemId(id)
                            .orElseThrow(() -> new NoSuchElementException("Produto não Encontrado"))));
       }
}