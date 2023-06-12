# Calculadora Tributaria ! 

Projeto desenvolvido para fixar conhecimento em React Js e Contabilidade Tributaria

| :placard: Vitrine.Dev |**Dyegho Cunha**
| -------------  | --- |
| :sparkles: Nome        | **Calculadora Tributaria**
| :label: Tecnologias | React.Js, HTML5, SCSS.
| :rocket: URL         | calculadora-tributaria.vercel.app


<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://raw.githubusercontent.com/DyeghoCunha/calculadora_tributaria/master/fotoCalc.png#vitrinedev)



## O Readme não está organizado ainda, então não precisa perder o tempo lendo hahahaha


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

alteração

/* Telas grandes (de 769px a 992px) */
@media (min-width: 769px) and (max-width: 992px) {
  /* Estilos para telas grandes */
}

/* Telas extra grandes (acima de 1200px) */
@media (min-width: 1200px) {
  /* Estilos para telas extra grandes */
}


vever o grafico
 teste
 
