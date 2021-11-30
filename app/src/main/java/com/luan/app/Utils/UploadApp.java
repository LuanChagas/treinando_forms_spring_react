package com.luan.app.Utils;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.web.multipart.MultipartFile;

public class UploadApp {
       public static String uploadImagem(MultipartFile file) throws IOException {
              String nome = file.getOriginalFilename();
              Path caminho = Paths.get("src/main/java/com/luan/app/upload-image");

              if (!Files.exists(caminho)) {
                     Files.createDirectories(caminho);
              }
              try (InputStream inputStream = file.getInputStream()) {
                     Path caminhoSalvar = caminho.resolve(nome);
                     Files.copy(inputStream, caminhoSalvar, StandardCopyOption.REPLACE_EXISTING);
                     inputStream.close();
                     return "salvo com sucesso";
              } catch (IOException e) {
                     throw new IOException(e);
              }
       }
}
