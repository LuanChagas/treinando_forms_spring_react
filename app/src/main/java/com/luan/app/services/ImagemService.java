package com.luan.app.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import com.luan.app.DTOs.ImagemDTO;
import com.luan.app.Utils.DTOparaEntidades;
import com.luan.app.entidades.Imagem;
import com.luan.app.entidades.Produto;
import com.luan.app.repositorios.ImagemRepositorio;
import com.luan.app.repositorios.ProdutoRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ImagemService {
       @Autowired
       private ImagemRepositorio imagemRepositorio;

       @Autowired
       private ProdutoRepositorio produtoRepositorio;

       @Autowired
       private DeniedLTokenService deniedLTokenService;

       public ResponseEntity<String> CreateImagem(ImagemDTO imagemDTO, String token) {
              try {
                     if (deniedLTokenService.existToken(token)) {
                            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
                     }
                     Imagem imagem = DTOparaEntidades.ImagemDTOparaProduto(imagemDTO);
                     Optional<Produto> produto = produtoRepositorio.findById(imagemDTO.getProduto().getId());
                     imagem.setProduto(produto.get());
                     imagemRepositorio.save(imagem);
                     return new ResponseEntity<String>("Imagem Cadastrada", HttpStatus.OK);
              } catch (Exception e) {
                     return new ResponseEntity<String>("error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
              }

       }

       public ResponseEntity obterImagens(String token) {
              if (deniedLTokenService.existToken(token)) {
                     return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
              }
              return ResponseEntity.ok(imagemRepositorio.findAll().stream().map(x -> {
                     Optional<Produto> produto = Optional.ofNullable(x.getProduto());
                     if (!produto.isPresent()) {
                            x.setProduto(new Produto());
                            x.getProduto().setId(0l);
                            x.getProduto().setNome("Produto não associado");
                     }
                     return new ImagemDTO(x);
              }).collect(Collectors.toList()));

       }

       public ResponseEntity<ImagemDTO> obterImagemId(Long id, String token) {
              if (deniedLTokenService.existToken(token)) {
                     return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
              }
              return ResponseEntity.ok(new ImagemDTO(imagemRepositorio.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Produto não Encontrado"))));

       }

       public ResponseEntity<String> deleteImagemByid(Long id, String token) {
              try {
                     if (deniedLTokenService.existToken(token)) {
                            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
                     }
                     if (!imagemRepositorio.findById(id).isPresent()) {
                            return new ResponseEntity<>("Imagem não encotrada", HttpStatus.NOT_FOUND);
                     }
                     imagemRepositorio.deleteById(id);
                     return new ResponseEntity<>("Imagem deletada", HttpStatus.OK);
              } catch (Exception e) {
                     return new ResponseEntity<String>("error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
              }

       }

       public ResponseEntity<String> updateImagem(ImagemDTO imagemDTO, String token) {
              try {
                     if (deniedLTokenService.existToken(token)) {
                            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
                     }
                     Imagem imagem = DTOparaEntidades.ImagemDTOparaProduto(imagemDTO);
                     imagem.setId(imagemDTO.getId());
                     imagemRepositorio.save(imagem);
                     return new ResponseEntity<>("Objeto atualizado", HttpStatus.OK);
              } catch (Exception e) {
                     return new ResponseEntity<String>("error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
              }

       }
}
