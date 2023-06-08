# Calculadora Tributaria ! 

Projeto desenvolvido para fixar conhecimento em React Js e Contabilidade Tributaria

| :placard: Vitrine.Dev |**Dyegho Cunha**
| -------------  | --- |
| :sparkles: Nome        | **Calculadora Tributaria**
| :label: Tecnologias | React.Js, HTML5, SCSS.
| :rocket: URL         | https://myroom-six.vercel.app


<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://github.com/DyeghoCunha/calculadora_tributaria/blob/master/Captura%20de%20tela%202023-05-24%20201039.png?raw=true#vitrinedev)




## Instalando React-Icons
npm install react-icons --save

## Instalado o Sass
npm install node-sass sass-loader style-loader css-loader sass

## Instalando o React Charts

npm install react-chartjs-2 chart.js


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



Fazer alteração na pagina inicial 


## CalculoContext.js

foi criado um contexto chamado CalculoContext juntamente com um provedor CalculoProvider. O contexto é usado para compartilhar e gerenciar o estado relacionado aos cálculos de impostos e valores de uma aplicação.

Dentro do provedor, são definidos vários estados e funções de configuração para esses estados. Aqui está uma breve descrição dos principais elementos do código:

Estados:

fatCalculo: representa o valor do faturamento utilizado nos cálculos.
qtdMeses: representa a quantidade de meses utilizada nos cálculos.
ramo: representa o ramo de atividade utilizado nos cálculos.
valorIr: representa o valor do Imposto de Renda (IR) calculado.
valorCsll: representa o valor da Contribuição Social sobre o Lucro Líquido (CSLL) calculada.
valorAdIr: representa o valor adicional do Imposto de Renda (IR) calculado.
valorTotalIr: representa o valor total do Imposto de Renda (IR) calculado, incluindo o adicional.
valorAdIrHospital: representa o valor adicional do Imposto de Renda (IR) para o ramo "Hospital" calculado.
valorIrHospital: representa o valor do Imposto de Renda (IR) para o ramo "Hospital" calculado.
valorTotalIrHospital: representa o valor total do Imposto de Renda (IR) para o ramo "Hospital" calculado, incluindo o adicional.
valorCsllHospital: representa o valor da Contribuição Social sobre o Lucro Líquido (CSLL) para o ramo "Hospital" calculada.
valorPis: representa o valor do Programa de Integração Social (PIS) calculado.
valorCofins: representa o valor da Contribuição para o Financiamento da Seguridade Social (COFINS) calculada.
valorIrRestituir: representa o valor do Imposto de Renda (IR) a restituir.
valorCsllRestiuir: representa o valor da Contribuição Social sobre o Lucro Líquido (CSLL) a restituir.
valorPisRestituir: representa o valor do Programa de Integração Social (PIS) a restituir.
valorCofinsRestituir: representa o valor da Contribuição para o Financiamento da Seguridade Social (COFINS) a restituir.
Funções de configuração:

setFatCalculo: atualiza o valor do faturamento.
setQtdMeses: atualiza a quantidade de meses.
setRamo: atualiza o ramo de atividade.
O código também inclui vários blocos useEffect que são acionados quando determinados estados são alterados. Esses efeitos são responsáveis por realizar os cálculos necessários com base nos valores fornecidos e atualizar os estados correspondentes.

Por fim, o provedor CalculoProvider envolve os componentes filhos e fornece o contexto com os valores e funções de configuração para que possam ser acessados por esses componentes.

##GraficoLinha




##Media Queries
/* Pequenas telas (até 576px) */
@media (max-width: 576px) {
  /* Estilos para telas pequenas */
}

/* Telas médias (de 577px a 768px) */
@media (min-width: 577px) and (max-width: 768px) {
  /* Estilos para telas médias */
}

/* Telas grandes (de 769px a 992px) */
@media (min-width: 769px) and (max-width: 992px) {
  /* Estilos para telas grandes */
}

/* Telas extra grandes (acima de 1200px) */
@media (min-width: 1200px) {
  /* Estilos para telas extra grandes */
}
