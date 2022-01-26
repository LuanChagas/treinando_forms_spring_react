package com.luan.app.controller;

import java.util.List;

import com.luan.app.DTOs.ProdutoDTO;
import com.luan.app.DTOs.ProdutoForm;
import com.luan.app.services.ProdutoServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/produto")
public class ProdutoController {

       @Autowired
       private ProdutoServices produtoServices;

       @CrossOrigin
       @PostMapping
       public ResponseEntity<String> createProduto(@RequestBody ProdutoDTO produtoDTO) {

              return produtoServices.createProduto(produtoDTO);
       }

       @CrossOrigin
       @PutMapping()
       public ResponseEntity<String> updateProduto(@RequestBody ProdutoDTO produtoDTO) {

              return produtoServices.update(produtoDTO);
       }

       @CrossOrigin
       @GetMapping()
       public ResponseEntity<List<ProdutoDTO>> obterProdutos() {

              return produtoServices.obterProdutos();
       }

       @CrossOrigin
       @GetMapping("/{id}")
       public ResponseEntity<ProdutoDTO> obterProdutoId(@PathVariable("id") Long id) {
              return produtoServices.obterProdutoId(id);
       }

       @CrossOrigin
       @DeleteMapping("/{id}")
       public ResponseEntity<String> deleteProdutoById(@PathVariable("id") Long id) {

              return produtoServices.deleteProdutoById(id);
       }

       @CrossOrigin
       @GetMapping("/id_nome")
       public ResponseEntity<List<ProdutoForm>> obterIdENomeProdutos() {
              return produtoServices.obterIdENomeProdutos();

       }

}
