package com.luan.app.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import com.luan.app.DTOs.ProdutoDTO;
import com.luan.app.Utils.DTOparaEntidades;
import com.luan.app.entidades.Produto;
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
@RequestMapping("/api/produto")
public class ProdutoController {

       @Autowired
       private ProdutoServices produtoServices;

       @PostMapping
       public String createProduto(@RequestBody ProdutoDTO produtoDTO) {

              try {
                     Produto produto = DTOparaEntidades.ProdutoDTOparaProduto(produtoDTO);
                     produtoServices.createProduto(produto);
                     return "Produto cadastrado";
              } catch (Exception e) {
                     return e.getMessage();
              }
       }

       @GetMapping
       public ResponseEntity<List<ProdutoDTO>> obterProdutos() {

              return ResponseEntity.ok(produtoServices.obterProdutos().stream().map(x -> new ProdutoDTO(x))
                            .collect(Collectors.toList()));

       }

       @GetMapping("/{id}")
       public ResponseEntity<ProdutoDTO> obterProdutoId(@PathVariable("id") Long id) {
              return ResponseEntity.ok(new ProdutoDTO(produtoServices.obterProdutoId(id)
                            .orElseThrow(() -> new NoSuchElementException("Produto não encontado"))));
       }
}
