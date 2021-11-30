package com.luan.app.Utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

public class DownloadApp {
       public ResponseEntity<ByteArrayResource> getFile() throws IOException {

              File arquivo = new File("src/main/java/com/luan/app/upload-image/treinandoForms.jpeg");
              return ResponseEntity.ok()
                            .header(HttpHeaders.CONTENT_DISPOSITION,
                                          "attachment;filename=\"" + arquivo.getName() + "\"")
                            .body(new ByteArrayResource(Files.readAllBytes(arquivo.toPath())));
       }

}
