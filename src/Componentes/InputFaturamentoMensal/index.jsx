import React, { useContext, useState } from 'react';
import InputFaturamentoGenerico from './InputFaturamentoGenerico';
import styles from './InputFaturamentoMensal.module.scss';

import faturamentoDb from '../../assets/json/dados.json';
import { FaturamentoInputContext } from '../../common/contex/FaturamentoInput';
import { MdOutlineCleaningServices } from "react-icons/md";
import { useEffect } from 'react';
import { EmpresaContext } from '../../common/contex/Empresa';
import { CalculoContext } from '../../common/contex/Calculos';


export default function InputFaturamentoMensal() {
  const [faturamentoDbValues, setFaturamentoDbValues] = useState(faturamentoDb);

  const { faturamentoMensal, setFaturamentoMensal, setFaturamentoMensalComAno, anoAtual, anoRetroativo } = useContext(FaturamentoInputContext);
  //!const [allFaturamentoMensal, setAllFaturamentoMensal] = useState([]); //!coloca todos os valores em um unico array
  const { anoSelecionado, setAnoSelecionado } = useContext(EmpresaContext)
  const [isErroAno, setIsErroAno] = useState(false); // New state variable
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const {reconheceClickBotao, setReconheceClickBotao} = useContext(CalculoContext)


  
  //* É COM O faturamentoMensal que temos as informações

  //? o faturamentoDbValues tem as informações do arquivo Json ?

  const handleFaturamentoInputChange = (id, value) => {
    setFaturamentoDbValues((prevValues) => ({
      ...prevValues,
      faturamentoMensal: prevValues.faturamentoMensal.map((obj) =>
        obj.id === id ? { ...obj, faturamentoMes: Number(value) } : obj
      ),
    }));
  };



  const handleCaptureData = () => {
    const capturedValues = faturamentoDbValues.faturamentoMensal.map((obj) => ({
      id: obj.id,
      valor: obj.faturamentoMes,
      mes: obj.mês,
      ano: anoSelecionado,
     

    })
    );
    setReconheceClickBotao(prevState => !prevState)
    setFaturamentoMensal(capturedValues);
    //!setAllFaturamentoMensal((prevValues) => [...prevValues, ...capturedValues]); // Coloca todos os valores em um unico array

    setFaturamentoMensalComAno((prevValues) => ({
      ...prevValues,
      [anoSelecionado]: [...(prevValues[anoSelecionado] || []), ...capturedValues],
    }));

    //* console.log('captured',capturedValues); // Console.log para visualizar a informação armazenada



  };

  const limpaFormulario = () => {
    setAnoSelecionado('');
    setFaturamentoDbValues(faturamentoDb);
  }


  let erro = (
    <p className={styles.erroAno}>
      O ano deve ser <span className={styles.menor}>menor</span> que {anoAtual}  <span className={styles.maior}>maior</span> que {anoRetroativo}
    </p>
  );



  useEffect(() => {
    setIsErroAno(anoSelecionado < anoRetroativo || anoSelecionado > anoAtual);
  }, [anoSelecionado, anoRetroativo, anoAtual]);




  useEffect(() => {
    const isDisabled =
      Number(anoSelecionado) > anoAtual ||
      Number(anoSelecionado) < anoRetroativo;
    setIsButtonDisabled(isDisabled);

  }, [anoSelecionado, anoAtual, anoRetroativo]);

  const handleAnoSelecionado = (e)=>{
    const valorDigitado = e.target.value;
    if (valorDigitado >= anoRetroativo && valorDigitado <= anoAtual) {
      setAnoSelecionado(valorDigitado);
    } else {
      console.log('Erro na data')
    }
  }

  return (

    <div className={styles.container}>
      <h1 className={styles.titulo}>Faturamento Mensal</h1>
      <div className={styles.mesesContainer}>

        <InputFaturamentoGenerico
          faturamentoDb={faturamentoDbValues}

          handleFaturamentoInputChange={handleFaturamentoInputChange}
        />

        {/* Tentando arrumar o Erro de aparecer o Ano */}

        {isErroAno && anoSelecionado !== '' && (
          <div className={`${styles.erroContainer} ${isErroAno ? styles.fadeIn : styles.fadeOut}`}>
            {erro}
          </div>

        )}

        <div className={styles.botaoAnoContainer}>
          <button onClick={handleCaptureData} disabled={isButtonDisabled} className={styles.botao}>
            Enviar</button>
          <input
            type="text"
            placeholder="Digite o ano"
            value={anoSelecionado}
            onChange={(e) => setAnoSelecionado(e.target.value)}
            className={styles.inputAno}
          />

          <button className={styles.limpaFormulario} onClick={limpaFormulario}><MdOutlineCleaningServices className={styles.iconeLimpa} /></button>
        </div>

      </div>
    </div>

  );
}
