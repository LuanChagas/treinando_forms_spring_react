package com.luan.app.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import com.luan.app.DTOs.ProdutoDTO;
import com.luan.app.DTOs.ProdutoForm;
import com.luan.app.Utils.DTOparaEntidades;
import com.luan.app.entidades.Produto;
import com.luan.app.repositorios.ProdutoRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProdutoServices {

       @Autowired
       private ProdutoRepositorio produtoRepositorio;

       public ResponseEntity<String> createProduto(ProdutoDTO produtoDTO) {
              try {
                     Produto produto = DTOparaEntidades.ProdutoDTOparaProduto(produtoDTO);
                     produtoRepositorio.save(produto);
                     return new ResponseEntity<>("Produto cadastrado", HttpStatus.OK);
              } catch (Exception e) {
                     return new ResponseEntity<String>("error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
              }

       }

       public ResponseEntity<List<ProdutoDTO>> obterProdutos() {
              return ResponseEntity.ok(produtoRepositorio.findAll().stream().map(x -> new ProdutoDTO(x))
                            .collect(Collectors.toList()));

       }

       public ResponseEntity<ProdutoDTO> obterProdutoId(Long id) {
              return ResponseEntity.ok(new ProdutoDTO(produtoRepositorio.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Produto não encontado"))));

       }

       public ResponseEntity<String> deleteProdutoById(Long id) {
              try {
                     if(!produtoRepositorio.findById(id).isPresent()){
                            return new ResponseEntity<String>("Produto não encotrado", HttpStatus.NOT_FOUND);
                     }
                     produtoRepositorio.deleteById(id);
                     return new ResponseEntity<String>("Produto deletado", HttpStatus.ACCEPTED);

              } catch (Exception e) {
                     return new ResponseEntity<String>("error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
              }
       }

       public ResponseEntity<String> update(ProdutoDTO produtoDTO) {

              try {
                     Produto produto = DTOparaEntidades.ProdutoDTOparaProduto(produtoDTO);
                     produto.setId(produtoDTO.getId());
                     produtoRepositorio.save(produto);
                     return new ResponseEntity<String>("Objeto atualizado", HttpStatus.OK);
              } catch (Exception e) {
                     return new ResponseEntity<String>("error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
              }

       }

       public ResponseEntity<List<ProdutoForm>> obterIdENomeProdutos(){

              return  ResponseEntity.ok(produtoRepositorio.findAll().stream().map(
                     x -> new ProdutoForm(x.getId(),x.getNome())
              ).collect(Collectors.toList()));
       }
}
