import React, { useContext } from 'react'
import { DctfImportContext } from '../../common/contex/DctfImport';

export const InputDctf = ()=> {

  const {updateArquivo, setValorEncontradoCofins,setValorEncontradoCsll,setValorEncontradoIr,setValorEncontradoPis} = useContext(DctfImportContext)


  function handleFileChange(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;
        console.log('Conteúdo do arquivo:', contents);

        let planilha = contents;
        updateArquivo(planilha);

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
            setValorEncontradoIr(number);
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
            setValorEncontradoCsll(number);
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
            setValorEncontradoPis(number);
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
            setValorEncontradoCofins(number);
          }
        } else {
          console.log('Nenhum match encontrado.');
        }
      };

      reader.readAsText(file);
    }
  }
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

