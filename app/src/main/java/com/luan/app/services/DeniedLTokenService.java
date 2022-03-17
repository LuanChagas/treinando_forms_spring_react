package com.luan.app.services;

import com.luan.app.entidades.DeniedToken;
import com.luan.app.repositorios.DeniedTokenRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class DeniedLTokenService {

    @Autowired
    private DeniedTokenRepositorio deniedTokenRepositorio;

    public ResponseEntity toDenyTokenString(String token) {

        if (existToken(token)) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        Integer tokenHash = token.hashCode();
        DeniedToken deniedToken = DeniedToken.builder().token(tokenHash).build();
        deniedTokenRepositorio.save(deniedToken);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public Boolean existToken(String token) {
        Integer tokenHash = token.hashCode();
        if (deniedTokenRepositorio.findByToken(tokenHash) != null) {
            return true;
        }
        return false;
    }
}
