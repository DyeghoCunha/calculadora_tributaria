import React, { useContext, useState } from 'react';
import InputFatGenericoSimplesNacional from './InputFatGenericoSimplesNacional';
import styles from './InputFaturamentoSimplesNacional.module.scss';

import faturamentoDb from '../../assets/json/dados.json';
import { FaturamentoInputContext } from '../../common/contex/FaturamentoInput';
import { MdOutlineCleaningServices } from "react-icons/md";
import { useEffect } from 'react';
import { EmpresaContext } from '../../common/contex/Empresa';
import { CalculoContext } from '../../common/contex/Calculos';





export default function InputFaturamentoSimplesNacional() {


  const { setFaturamentoMensal, setFaturamentoMensalComAno, anoAtual, anoRetroativo } = useContext(FaturamentoInputContext);
  const { mesesDeFaturamento, anoSelecionado, setAnoSelecionado, simplesNacional, empresa, setEmpresa, empresaSimplesNacional, setEmpresaSimplesNacional, anoHoje } = useContext(EmpresaContext);
  const [isErroAno, setIsErroAno] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { setReconheceClickBotao } = useContext(CalculoContext);
  const [faturamentoAnoAtual, setFaturamentoAnoAtual] = useState([])


  const handleFaturamentoInputChange = (id, value) => {
    setEmpresa(prevValues => {
      const updatedEmpresa = prevValues.map(obj => {
        if (obj.id === id) {
          return { ...obj, faturamentoMes: value };
        }
        return obj;
      });
      return updatedEmpresa;
    });
  };

  /*//TODO
  Separar os anos de faturamento em 2 cards
  para isso preciso tirar a segregação do faturamento de dentro do HandleCaptureData para que eu possa trabalhar
  com ele, creio que eu possa fazer isso deixando alguma coisa vinculada a digitação do ano, talvez
  pegar o parametro do ano digitado e validar a criação das tabelas, para só depois poder receber os valores
  e digitar eles. Creio que esta seja a melhor solução
  
  
  */


  //!Estou tentando salvar os arrays para usar eles de forma separada no Formulário
  const handleCaptureData = () => {

    const ano = Number(anoSelecionado)

    if (ano === anoAtual) {

      const ultimoJaneiro = empresa.findIndex(obj => obj.mês === 'Janeiro');
      const indexUltimoMes = empresa.length - 1;

      const mesesDoAnoAtual = empresa.slice(ultimoJaneiro, indexUltimoMes + 1);
      console.log('Meses ano 2023:', mesesDoAnoAtual);

      const mesesDoAnoAnterior = empresa.slice(0, ultimoJaneiro);
      console.log('Meses Ano Anterior:', mesesDoAnoAnterior);

      const valoresParaEsteAno = mesesDoAnoAtual.map((obj) => ({
        id: obj.id,
        faturamento: obj.faturamentoMes,
        mes: obj.mês,
        ano: ano,
      }));

      const valoresParaOAnoPassado = mesesDoAnoAnterior.map((obj) => ({
        id: obj.id,
        faturamento: obj.faturamentoMes,
        mes: obj.mês,
        ano: ano - 1,
      }));
      const faturamentoDozeMeses = [...valoresParaOAnoPassado, ...valoresParaEsteAno]
      setEmpresaSimplesNacional(faturamentoDozeMeses)
      setFaturamentoAnoAtual(valoresParaEsteAno)
    }

    if (ano !== anoAtual) {
      const capturedValues = empresa.map((obj) => ({
        id: obj.id,
        faturamento: obj.faturamentoMes,
        mes: obj.mês,
        ano: ano,
      })
      );
      setEmpresaSimplesNacional(capturedValues);


    }


    setReconheceClickBotao((prevState) => !prevState);


    /*     setFaturamentoMensalComAno((prevValues) => ({
          ...prevValues,
          [anoSelecionado]: [...(prevValues[anoSelecionado] || []), ...capturedValues],
        })); */
  };
//!------------------------------------------------------------------------------
//!------------------------------------------------------------------------------
//!------------------------------------------------------------------------------
//!------------------------------------------------------------------------------
  const limpaFormulario = () => {
    setAnoSelecionado('');

  };

  let erro = (
    <p className={styles.erroAno}>
      O ano deve ser <span className={styles.menor}>menor</span> que {anoAtual} <span className={styles.maior}>maior</span> que {anoRetroativo}
    </p>
  );

  useEffect(() => {
    setIsErroAno(anoSelecionado < anoRetroativo || anoSelecionado > anoAtual);
  }, [anoSelecionado, anoRetroativo, anoAtual]);

  useEffect(() => {
    if (!simplesNacional) {
      const isDisabled = Number(anoSelecionado) > anoAtual || Number(anoSelecionado) < anoRetroativo;
      setIsButtonDisabled(isDisabled);
    }
    if (simplesNacional) {
      if (anoSelecionado.length > 0) {
        const isDisabled = anoSelecionado.length === 4 && Number(anoSelecionado) >= 2012;
        setIsButtonDisabled(!isDisabled);
      }
    }
  }, [anoSelecionado, anoAtual, anoRetroativo]);

  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          placeholder="Digite o ano"
          value={anoSelecionado}
          onChange={(e) => setAnoSelecionado(e.target.value)}
          className={styles.inputAno}
        />
        <button onClick={handleCaptureData} disabled={isButtonDisabled} className={styles.botao}>
          Iniciar
        </button>
      </div>

     {/*  //TODO Validação para liberar o formulário */}
      <h1 className={styles.titulo}>Faturamento Mensal</h1>
      <div className={styles.mesesContainer}>


        {empresa && empresa[0].mês && (

          <div>
            <InputFatGenericoSimplesNacional
              empresa={empresa}
              handleFaturamentoInputChange={handleFaturamentoInputChange}
            />
            {/*           <h1>----</h1>
          <InputFatGenericoSimplesNacional
            empresa={empresa}
            handleFaturamentoInputChange={handleFaturamentoInputChange}
          /> */}
          </div>
        )}


        {isErroAno && anoSelecionado !== '' && !simplesNacional && (
          <div className={`${styles.erroContainer} ${isErroAno ? styles.fadeIn : styles.fadeOut}`}>
            {erro}
          </div>
        )}

        <div className={styles.botaoAnoContainer}>
          <button onClick={handleCaptureData} disabled={isButtonDisabled} className={styles.botao}>
            Enviar
          </button>


          <button className={styles.limpaFormulario} onClick={limpaFormulario}>
            <MdOutlineCleaningServices className={styles.iconeLimpa} />
          </button>
        </div>
      </div>
    </div>
  );
}
