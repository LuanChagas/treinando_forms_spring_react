

# Treinando forms com Spring React

  
  

O intuito deste repositório é mostrar, através de uma linha do tempo, o meu desenvolvimento e estudo com formulários usando Spring Boot no backend e React.js no front.

  

A cada commit será detalhado o que eu fiz, bem, eu espero né!? :smile:

  

## Criado pagina estática com react [![](https://img.shields.io/badge/-Pg--Estática-green)](https://github.com/LuanChagas/treinando_forms_spring_react/commit/1ba72efb5fbff09bb92c8d206afe6523da7e277b)

  

Uma pagina estática e simples usando a biblioteca React-Router para o roteamento entre os componentes.

E já para alguns estilos, e querendo surfar na onda do momento, usei o tailwind. Mas na parte de layout eu deixei para os meus queridos CSS grid e flex. Não que eu seja um expert (ainda) mas me viro bem :smile:.

  

**Bibliotecas usadas:**

  

-  [![](https://img.shields.io/badge/-react--router-9cf)](https://github.com/remix-run/react-router)

-  [![](https://img.shields.io/badge/-tailwind-9cf)](https://github.com/tailwindlabs/tailwindcss)
## Criado o back-end [![](https://img.shields.io/badge/-criado--backEnd-green)](https://github.com/LuanChagas/treinando_forms_spring_react/tree/ab2e2099fcf4625c050212ae7b147521d49ac4cd)

Nada tão diferente do básico de uma estrutura Rest em Spring Boot. 

**O que foi criado?**
- Entidades com o mapeamento do JPA. Usando mysql como banco de dados.
- Controllers, repositórios, Services e DTO's

Para minhas entidades usei o lombok. Cheguei a aprender mais sobre o Java Records e seu conceito, mas como é algo imutável, não foi necessário nesse projeto de estudo.

Criei para fins de aprendizado, uma classe para fazer o upload e outra para o download. Como nunca tinha feito isso antes, criei para testes mas não implementei pelo fato do meu objetivo ser de enviar a imagem para o [Firebase Storage](https://firebase.google.com/) e apenas salvar a url da imagem no banco de dados. 
Tentei fazer pelo próprio Spring Boot, porém, acredito que não tenha como recuperar a url  com o token para ser visualizada publicamente pelo fato que para recuperar esse tipo de url é necessária uma função assíncrona. Então deixei para fazer isso no front end mesmo.

Eu posso estar falando muita besteira sobre o paragrafo acima:smile::smile:. Bem,releva ai né, sou apenas um carinha tentado ser um Júnior:smile::smile:. Devagar(logo, logo) eu chego lá...

![ ](https://miro.medium.com/max/910/1*Qh8YL-0nZQUaHiW-xtUqqg.jpeg)
> Créditos da imagem: [The first job: A junior’s developer odyssey - Martín Cristóbal Balasch](https://medium.com/@martncristbalbalasch/the-first-job-a-juniors-developer-odyssey-bf6c34796179)

## Um pouco de tudo [![](https://img.shields.io/badge/-Tudo--mais--um--pouco-green)](https://github.com/LuanChagas/treinando_forms_spring_react/commit/ca0f2b2ab9a2761ae006dc3c28d998ed6780911e)
**Firebase**

Como tinha dito, configurei e adicionei a função de adicionar a imagem no Firebase Storage. Confesso que não foi muito difícil, porém na parte onde eu obtenho a url ficou meio **sei lá** :man_shrugging: . Fiz como imaginava: usando o hooks useState para 'setar' o valor, mas não funcionava nem a pau. Acabei jogando diretamente no axios e funcionou. Fica faltando apenas e delete direto no storage.

**Crud**

 No Spring já criei todo o crud básico que o sistema vai usar (:thinking:). Aproveitei tirei toda a regra de negócio e passei para o Service.
Já no React, está faltando apenas o update.

**Crud(update)** [![](https://img.shields.io/badge/-Update--produtos--imagem--React-green)](https://github.com/LuanChagas/treinando_forms_spring_react/commit/27ae0adf46afbdc862e44ccc2dceaf1c251002ce)

Enfim, finalizado o update no fronte end de produtos e imagens.

**delete imagem do firebase** [![](https://img.shields.io/badge/-deletando--imagem--Firebase-green)](https://github.com/LuanChagas/treinando_forms_spring_react/commit/27ae0adf46afbdc862e44ccc2dceaf1c251002ce)

Adicionei a função de deletar uma iamgem diretamente do app. Também deletará quando for atualizar uma nova imagem para o objeto imagem.
