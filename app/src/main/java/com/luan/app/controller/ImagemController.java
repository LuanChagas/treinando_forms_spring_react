package com.luan.app.controller;

import java.util.List;

import com.luan.app.DTOs.ImagemDTO;
import com.luan.app.services.ImagemService;

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
public class ImagemController {

       @Autowired
       private ImagemService imagemService;

       @PostMapping(value = "admin/imagem")
       public ResponseEntity<String> createImagem(@RequestBody ImagemDTO imagemDTO,
                     @RequestHeader("Authorization") String token) {

              return imagemService.CreateImagem(imagemDTO, token);
       }

       @GetMapping(value = "user/imagens")
       public ResponseEntity obterImagens(@RequestHeader("Authorization") String token) {

              return imagemService.obterImagens(token);
       }

       @GetMapping("user/imagem/{id}")
       public ResponseEntity<ImagemDTO> obterImagemPorId(@PathVariable("id") Long id,
                     @RequestHeader("Authorization") String token) {
              return imagemService.obterImagemId(id, token);
       }

       @DeleteMapping("admin/imagem//{id}")
       public ResponseEntity<String> deleteImagemByid(@PathVariable("id") Long id,
                     @RequestHeader("Authorization") String token) {
              return imagemService.deleteImagemByid(id, token);

       }

       @PutMapping("admin/imagem")
       public ResponseEntity<String> updateImagem(@RequestBody ImagemDTO imagemDTO,
                     @RequestHeader("Authorization") String token) {
              return imagemService.updateImagem(imagemDTO, token);
       }

}