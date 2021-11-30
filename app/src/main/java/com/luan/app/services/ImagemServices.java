package com.luan.app.services;

import java.util.List;
import java.util.Optional;

import com.luan.app.entidades.Imagem;
import com.luan.app.repositorios.ImagemRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImagemServices {
       @Autowired
       private ImagemRepositorio imagemRepositorio;

       public Imagem CreateImagem(Imagem img) {
              return imagemRepositorio.save(img);
       }

       public List<Imagem> obterImagens() {
              return imagemRepositorio.findAll();
       }

       public Optional<Imagem> obterImagemId(Long id) {
              return imagemRepositorio.findById(id);
       }
}
