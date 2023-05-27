# Calculadora Tributaria ! 

Projeto desenvolvido para fixar conhecimento em React Js e Contabilidade Tributaria

| :placard: Vitrine.Dev |**Dyegho Cunha**
| -------------  | --- |
| :sparkles: Nome        | **Calculadora Tributaria**
| :label: Tecnologias | React.Js, HTML5, SCSS.
| :rocket: URL         | https://myroom-six.vercel.app


<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://github.com/DyeghoCunha/calculadora_tributaria/blob/master/Captura%20de%20tela%202023-05-24%20201039.png?raw=true#vitrinedev)





## Instalado o Sass
npm install node-sass sass-loader style-loader css-loader sass



## Instalando o EMAIL SDK

npm install @emailjs/browser 

## Instalando o MarkDown

npm install ract-markdown

## Instalando o React Router Dom

npm install react-router-dom

## Instalar o File-Saver

npm install file-saver --save

let conteudo = 'Olaaaar';
const blob = new Blob([conteudo], { type: 'text/plain' });

// Cria um objeto FileSaver.js
const fileSaver = require('file-saver');

// Salva o arquivo
fileSaver.saveAs(blob, 'nome_do_arquivo.txt');let file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(file);