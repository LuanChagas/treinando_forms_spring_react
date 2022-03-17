package com.luan.app.controller;

import com.luan.app.services.DeniedLTokenService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("logout")
public class DeniedTokenController {

    @Autowired
    private DeniedLTokenService deniedLTokenService;

    @GetMapping
    public ResponseEntity<Object> toDenyToken(@RequestHeader("Authorization") String token) {

        return deniedLTokenService.toDenyTokenString(token);

    }

}
