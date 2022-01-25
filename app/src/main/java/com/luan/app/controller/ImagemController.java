package com.luan.app.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import com.luan.app.DTOs.ImagemDTO;
import com.luan.app.Utils.DTOparaEntidades;
import com.luan.app.entidades.Imagem;
import com.luan.app.entidades.Produto;
import com.luan.app.repositorios.ProdutoRepositorio;
import com.luan.app.services.ImagemServices;
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
@RequestMapping("/api/imagem")
public class ImagemController {

       @Autowired
       private ImagemServices imagemServices;

       @CrossOrigin
       @PostMapping
       public ResponseEntity<String> createImagem(@RequestBody ImagemDTO imagemDTO) {

              return imagemServices.CreateImagem(imagemDTO);
       }

       @CrossOrigin
       @GetMapping
       public ResponseEntity<List<ImagemDTO>> obterImagens() {

              return ResponseEntity.ok(imagemServices.obterImagens());
       }

       @CrossOrigin
       @GetMapping("/{id}")
       public ResponseEntity<ImagemDTO> obterImagemPorId(@PathVariable("id") Long id) {
              return imagemServices.obterImagemId(id);
       }

       @CrossOrigin
       @DeleteMapping("/{id}")
       public ResponseEntity<String> deleteImagemByid(@PathVariable("id") Long id) {
              return imagemServices.deleteImagemByid(id);
              
       }

       @CrossOrigin
       @PutMapping
       public ResponseEntity<String> updateImagem(@RequestBody ImagemDTO imagemDTO) {
              return imagemServices.updateImagem(imagemDTO);
       }

}