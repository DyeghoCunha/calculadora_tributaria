import React, { useState } from 'react';

export default function IdentificadorDeArquivo({ir,csll,pis,cofins}) {
  const [arquivo, setArquivo] = useState([]);
  const [valorEncontradoIr, setValorEncontradoIr] = useState('');
  const [valorEncontradoCsll, setValorEncontradoCsll]= useState('');
  const [valorEncontradoPis, setValorEncontradoPis] = useState('');
  const [valorEncontradoCofins, setValorEncontradoCofins] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;
        console.log('Conteúdo do arquivo:', contents);

        let planilha = contents;
        setArquivo([...arquivo, { planilha }]);
        console.log(arquivo);

        // Filtrar a linha com base no número e extrair o valor
        const padraoIr = /R\d+-\d+2089\d+T(\d+)/g;
        const padraoCsll = /R\d+-\d+2372\d+T(\d+)/g;
        const padraoPis = /R\d+-\d+8109\d+M(\d+)/g;
        const padraoCofins = /R\d+-\d+2172\d+M(\d+)/g;
        
        const matchesIr = planilha.match(padraoIr);
        const matchesCsll = planilha.match(padraoCsll);
        const matchesPis = planilha.match(padraoPis);
        const matchesCofins = planilha.match(padraoCofins);

        if (matchesIr) {
          for (const match of matchesIr) {
            const valor = match.slice(-13);
            const resultadoFinal = valor.slice(0, -4);
            console.log('Valor encontrado:', valor);
            const number = Number(resultadoFinal) / 100;
            console.log('Valor:', number);
            setValorEncontradoIr(number); // Armazena o valor encontrado no estado
          }
        } else {
          console.log('Nenhum match encontrado.');
        }
        if (matchesCsll) {
          for (const match of matchesCsll) {
            const valor = match.slice(-13);
            const resultadoFinal = valor.slice(0, -4);
            console.log('Valor encontrado:', valor);
            const number = Number(resultadoFinal) / 100;
            console.log('Valor:', number);
            setValorEncontradoCsll(number); // Armazena o valor encontrado no estado
          }
        } else {
          console.log('Nenhum match encontrado.');
        }
        if (matchesPis) {
          for (const match of matchesPis) {
            const valor = match.slice(-13);
            const resultadoFinal = valor.slice(0, -4);
            console.log('Valor encontrado:', valor);
            const number = Number(resultadoFinal) / 100;
            console.log('Valor:', number);
            setValorEncontradoPis(number); // Armazena o valor encontrado no estado
          }
        } else {
          console.log('Nenhum match encontrado.');
        }
        if (matchesCofins) {
          for (const match of matchesCofins) {
            const valor = match.slice(-13);
            const resultadoFinal = valor.slice(0, -4);
            console.log('Valor encontrado:', valor);
            const number = Number(resultadoFinal) / 100;
            console.log('Valor:', number);
            setValorEncontradoCofins(number); // Armazena o valor encontrado no estado
          }
        } else {
          console.log('Nenhum match encontrado.');
        }
        
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <p>Valor encontrado do IR: {valorEncontradoIr}</p>
      <p>Valor encontrado do Csll: {valorEncontradoCsll}</p> 
      <p>Valor encontrado do Pis: {valorEncontradoPis}</p>
      <p>Valor encontrado do Cofins: {valorEncontradoCofins}</p>{/* Exibe o valor encontrado na interface */}
    </div>
  );
}
