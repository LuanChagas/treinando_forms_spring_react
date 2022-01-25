package com.luan.app.repositorios;

import java.util.HashMap;
import java.util.List;

import com.luan.app.DTOs.ProdutoForm;
import com.luan.app.entidades.Produto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepositorio extends JpaRepository<Produto, Long> {

}
