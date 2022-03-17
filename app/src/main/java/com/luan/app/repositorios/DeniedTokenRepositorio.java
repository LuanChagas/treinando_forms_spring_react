package com.luan.app.repositorios;

import com.luan.app.entidades.DeniedToken;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DeniedTokenRepositorio extends JpaRepository<DeniedToken, Long> {

  DeniedToken findByToken(Integer token);
}
