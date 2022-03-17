package com.luan.app.controller;

import java.util.List;

import com.luan.app.DTOs.ProdutoDTO;
import com.luan.app.DTOs.ProdutoForm;
import com.luan.app.services.ProdutoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class ProdutoController {

       @Autowired
       private ProdutoService produtoService;

       @PostMapping(value = "admin/produto")
       public ResponseEntity<String> createProduto(@RequestBody ProdutoDTO produtoDTO ,@RequestHeader("Authorization") String token) {
              return produtoService.createProduto(produtoDTO,token);
       }

       @PutMapping(value = "admin/produto")
       public ResponseEntity<String> updateProduto(@RequestBody ProdutoDTO produtoDTO, @RequestHeader("Authorization") String token) {

              return produtoService.update(produtoDTO,token);
       }

       @GetMapping(value = "user/produto")
       public ResponseEntity<List<ProdutoDTO>> obterProdutos( @RequestHeader("Authorization") String token) {

              return produtoService.obterProdutos(token);
       }

       @GetMapping("user/produto/{id}")
       public ResponseEntity obterProdutoId(@PathVariable("id") Long id, @RequestHeader("Authorization") String token) {
              return produtoService.obterProdutoId(id, token);
       }

       @DeleteMapping("admin/produto/{id}")
       public ResponseEntity<String> deleteProdutoById(@PathVariable("id") Long id, @RequestHeader("Authorization") String token) {

              return produtoService.deleteProdutoById(id,token);
       }

       @GetMapping("user/produto/id_nome")
       public ResponseEntity<List<ProdutoForm>> obterIdENomeProdutos( @RequestHeader("Authorization") String token) {
              return produtoService.obterIdENomeProdutos(token);

       }

}
