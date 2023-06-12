import React, { createContext, useContext, useEffect, useState } from "react";
import { FaturamentoInputContext } from "./FaturamentoInput";
import { EmpresaContext } from "./Empresa.js";


const CalculoContext = createContext();

const CalculoProvider = ({ children }) => {
  CalculoProvider.displayName = "Calculo";

  const presIrComerico = 0.08;
  const presIrServico = 0.32;
  const presIrHospital = 0.08;
  const adicionalIr = 0.1;

  const presCsllComercio = 0.12;
  const presCsllServico = 0.32;
  const presCsllHospital = 0.12;

  const alqIr = 0.15;
  const alqCsll = 0.09;
  const alqPis = 0.0065;
  const alqCofins = 0.03;

  //*Apenas para controlar o que aparece na Teal
  const [mostraTela, setMostratela] = useState(true)
  //*--------------------------------------------

  const [qtdMeses, setQtdMeses] = useState(0)

  //* Faturamento Total Digitado
  const [faturamento, setFaturamento] = useState(0);
  const [faturamentoSomado, setFaturamentoSomado] = useState(0)

  const [ramo, setRamo] = useState('Serviço')

  const [valorIr, setValorIr] = useState(0);
  const [valorAdIr, setValorAdIr] = useState(0);
  const [valorTotalIr, setValorTotalIr] = useState(0);
  const [bcNormalIr, setBcNormalIr] = useState(0);
  const [bcNormalCsll, setBcNormalCsll] = useState(0);
  const [valorCsll, setValorCsll] = useState(0);

  const [valorIrRestituir, setValorIrRestituir] = useState(0)
  const [valorCsllRestituir, setValorCsllRestituir] = useState(0)
  const [valorPisRestituir, setValorPisRestituir] = useState(0)
  const [valorCofinsRestituir, setValorCofinsRestituir] = useState(0)

  const [bcHospitalCsll, setBcHospitalCsll] = useState(0);
  const [bcHospitalIr, setBcHospitalIr] = useState(0);
  const [valorAdIrHospital, setValorAdIrHospital] = useState(0);
  const [valorIrHospital, setValorIrHospital] = useState(0);
  const [valorTotalIrHospital, setValorTotalIrHospital] = useState(0)
  const [valorCsllHospital, setValorCsllHospital] = useState(0);

  const [valorPis, setValorPis] = useState(0);
  const [valorCofins, setValorCofins] = useState(0);
  const [bcExcedente, setBcExcedente] = useState(0)
  const [fatCalculo, setFatCalculo] = useState(0);

  const [faturamentoMesAno, setFaturamentoMesAno] = useState({})

  const { anoSelecionado } = useContext(EmpresaContext);

  const [controlaAno, setControlaAno] = useState(0)

  const [reconheceClickBotao, setReconheceClickBotao] = useState(true)

  const { dadosFormularioMensal, setDadosFormularioMensal } = useContext(EmpresaContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [userConfirmation, setUserConfirmation] = useState(false);
 
  useEffect(() => {
    if (fatCalculo && fatCalculo.rbt12) {
      setFaturamento(fatCalculo.rbt12);
      setFaturamentoSomado(faturamentoSomado + fatCalculo.rbt12)
    }

    setValorAdIr(0)
    setValorAdIrHospital(0)
  }, [fatCalculo]);


  useEffect(() => {

    if (faturamento) {
      setValorPis(faturamento * alqPis);
      setValorCofins(faturamento * alqCofins);

      //TODO Alterar esta parte para a seleção ficar dinãmica
      //!Cuidar com esta Parte
      if (ramo) {

        if (ramo == "Comercio") {
          setBcNormalIr(faturamento * presIrComerico);
          setBcNormalCsll(faturamento * presCsllComercio);
          setBcHospitalIr(faturamento * presIrHospital);
          setBcHospitalCsll(faturamento * presCsllHospital);

        } else if (ramo == "Serviço") {
          setBcNormalIr(faturamento * presIrServico);
          setBcNormalCsll(faturamento * presCsllServico);
          setBcHospitalIr(faturamento * presIrHospital);
          setBcHospitalCsll(faturamento * presCsllHospital);

        } else if (ramo == "Hospital") {
          setBcHospitalIr(faturamento * presIrHospital);
          setBcHospitalCsll(faturamento * presCsllHospital);
        } else {
          console.log(
            "Como não foi informado um Ramo, a aplicação usou o padrão Comércio, ou apresentou erro"
          );
        }

      }
      setBcExcedente(20000 * qtdMeses)

    }
  }, [faturamento]);


  useEffect(() => {

    if (bcNormalIr > bcExcedente) {
      const addBc = (bcNormalIr - bcExcedente) * adicionalIr
      setValorAdIr(addBc);
      console.log('ValorAdIRNormal: ',addBc)
    }
  
    if (bcNormalIr) {
      setValorIr(bcNormalIr * alqIr);
      setValorCsll(bcNormalCsll * alqCsll)
    }

  }, [bcNormalIr]);


  useEffect(() => {

    if (bcHospitalIr > bcExcedente) {
      const addBc = (bcHospitalIr - bcExcedente) * adicionalIr
      setValorAdIrHospital(addBc);
      console.log('ValorAdIRHospital: ',addBc)
    }

    if (bcHospitalIr) {
      setValorIrHospital(bcHospitalIr * alqIr)
      setValorCsllHospital(bcHospitalCsll * alqCsll)
    }

  }, [bcHospitalIr])


  useEffect(() => {

    if (valorAdIr) {
      const addIrTotal = valorIr + valorAdIr
      setValorTotalIr(addIrTotal);
    } else {
      setValorTotalIr(valorIr);
    }

  }, [valorAdIr, valorIr])



  useEffect(() => {

    if (valorAdIrHospital) {
      const addIrTotal = valorIrHospital + valorAdIrHospital
      setValorTotalIrHospital(addIrTotal);
    } else {
      setValorTotalIrHospital(valorIrHospital);
    }

    const irRestituir = valorTotalIr - valorTotalIrHospital
    const csllRestituir = valorCsll - valorCsllHospital



    setValorIrRestituir(irRestituir)
    setValorCsllRestituir(csllRestituir)
    setValorPisRestituir(0)
    setValorCofinsRestituir(0)




    setMostratela(!mostraTela)
  }, [valorTotalIr, valorIrHospital, valorAdIrHospital])

  useEffect(() => {
    setControlaAno(controlaAno + 1)
  }, [valorIr])

  useEffect(() => {
    // Verifica se o ano selecionado está vazio
    if (anoSelecionado.length === 0) {
      return;
    }

   
      const novoObjeto = {
        ano: anoSelecionado,
        faturamento: faturamento,
        ir: valorIr,
        irAd: valorAdIr,
        irT: valorTotalIr,
        irH: valorIrHospital,
        irHAd: valorAdIrHospital,
        irHT: valorTotalIrHospital,
        csll: valorCsll,
        pis: valorPis,
        cofins: valorCofins,
        irRestituir: valorIrRestituir,
        csllRestituir: valorCsllRestituir,
        pisRestituir: valorPisRestituir,
        cofinsRestituir: valorCofinsRestituir,
        mesesFaturado: qtdMeses,
        visivel:'' 
      };
     const timer = setTimeout(() => {
      const objetoExistente = dadosFormularioMensal.find(objeto => objeto.ano === novoObjeto.ano);
    
      if (!objetoExistente) {
        setDadosFormularioMensal([...dadosFormularioMensal, novoObjeto]);
      } else {


        //TODO FAZER UM CARD INFORMANDO ISTO
        console.log('Já existe um objeto com o mesmo ano no array.');
      }
    }, 20);
    
    return () => {
      clearTimeout(timer);
    };
    
    
     
    
    //setDadosFormularioMensal([...dadosFormularioMensal, novoObjeto]);
    //todo ---- ENCONTRAR UMA FORMA DO CODIGO ACEITAR FATURAMENTOS IGUAIS PARA ANOS DIFERENTES
    //!! TENHO QUE ACHAR UM JEITO DE RESOLVER 
  }, [valorIrRestituir, reconheceClickBotao]);

/*
  useEffect(() => {
    if (valorIrHospital > 1) {


      console.log('ano: ', anoSelecionado);
      console.log('faturamento: ', faturamento);
      console.log('ir: ', valorIr);
      console.log('irAd: ', valorAdIr);
      console.log('irT: ', valorTotalIr);
      console.log('irH: ', valorIrHospital);
      console.log('irHAd: ', valorAdIrHospital);
      console.log('irHT: ', valorTotalIrHospital);
      console.log('csll: ', valorCsll);
      console.log('pis: ', valorPis);
      console.log('cofins: ', valorCofins);
      console.log('irRestituir: ', valorIrRestituir);
      console.log('csllRestituir: ', valorCsllRestituir);
      console.log('pisRestituir: ', valorPisRestituir);
      console.log('cofinsRestituir: ', valorCofinsRestituir);
      console.log('mesesFaturado: ', qtdMeses);

       console.log("------------Faturamento---------------");
      console.log('Faturamento: ', faturamento)
      console.log("----------Normal--------------");
      console.log('BcIRn: ', bcNormalIr)
      console.log('Valor IRn: ', valorIr)
      console.log('Adicional IRn: ', valorAdIr)
      console.log('IRn Total: ', valorTotalIr)
      console.log("---------------------------");
      console.log("BcCslln: ", bcNormalCsll);
      console.log('Valor Cslln: ', valorCsll)

      console.log("\n----------Hospital--------------");

      console.log('BcIR-hpt: ', bcHospitalIr)
      console.log('Valor IR-hpt: ', valorIrHospital)
      console.log('Adicional IR-hpt: ', valorAdIrHospital)
      console.log('IR-hpt Total: ', valorTotalIrHospital)
      console.log("---------------------------");
      console.log("BcCsll-hpt: ", bcHospitalCsll);
      console.log('Valor Csll-hpt: ', valorCsllHospital)
      console.log("\n---------------------------");

      console.log("Pis:", valorPis);
      console.log("Cofins:", valorCofins);
      console.log("----------------------------");


    }

  }, [mostraTela])
  */

  const value = {
    fatCalculo,
    faturamentoSomado,
    setFatCalculo,
    setQtdMeses,
    ramo,
    setRamo,
    valorIr,
    valorCsll,
    valorAdIr,
    valorTotalIr,
    valorAdIrHospital,
    valorIrHospital,
    valorTotalIrHospital,
    valorCsllHospital,
    valorPis,
    valorCofins,
    faturamento,
    valorIrRestituir,
    valorCsllRestituir,
    valorCofinsRestituir,
    valorPisRestituir,
    valorCofinsRestituir,
    setFaturamentoMesAno,
    setControlaAno, setReconheceClickBotao, reconheceClickBotao, modalIsOpen, setModalIsOpen, userConfirmation, setUserConfirmation
  };

  return (
    <CalculoContext.Provider value={value}>
      {children}
    </CalculoContext.Provider>
  );
};

export { CalculoContext, CalculoProvider };




