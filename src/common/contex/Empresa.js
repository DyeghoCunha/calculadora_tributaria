import React, { createContext, useContext, useEffect, useState } from "react";
import { CalculoContext } from "./Calculos";
import { FaturamentoInputContext } from "./FaturamentoInput";
import EmpresaJson from '../../assets/json/dados.json'
const EmpresaContext = createContext()


const EmpresaProvider = ({ children }) => {

  const [anoSelecionado, setAnoSelecionado] = useState('')
  const [dadosFormularioMensal, setDadosFormularioMensal] = useState([]);
  const [anoSide, setAnoSide] = useState([]);

  const [simplesNacional, setSimplesNacional] = useState(true)
  const [lucroPresumido, setLucroPresumido] = useState(false)
  const [dadosJson, setDadosJson] = useState(EmpresaJson)

  const [mesAtual, setMesAtual] = useState('')
  const [mesAnterior, setMesAnterior] = useState([])
  const [anoAtual, setAnoAtual] = useState('')
  const [meses, setMeses] = useState([])


  const [empresaSimplesNacional, setEmpresaSimplesNacional] = useState([])
  const [atividadeEmpresa, setAtividadeEmpresa] = useState('')






  const [dataAtual, setDataAtual] = useState(new Date());
  const [mesAgora, setMesAgora] = useState(0);
  const [anoHoje, setAnoHoje] = useState(0);
  const [mesesDeFaturamento, setMesesDeFaturamento] = useState([])

  const [empresa, setEmpresa] = useState([
    {
      id: 1,
      mês: "",
      faturamentoMes: "",
    },
    {
      id: 2,
      mês: "",
      faturamentoMes: "",
    },
    {
      id: 3,
      mês: "",
      faturamentoMes: "",
    }, {
      id: 4,
      mês: "",
      faturamentoMes: "",
    }, {
      id: 5,
      mês: "",
      faturamentoMes: "",
    },

    {
      id: 6,
      mês: "",
      faturamentoMes: "",
    }, {
      id: 7,
      mês: "",
      faturamentoMes: "",
    }, {
      id: 8,
      mês: "",
      faturamentoMes: "",
    },
    {
      id: 9,
      mês: "",
      faturamentoMes: "",
    },
    {
      id: 10,
      mês: "",
      faturamentoMes: "",
    },

    {
      id: 11,
      mês: "",
      faturamentoMes: "",
    },
    {
      id: 12,
      mês: "",
      faturamentoMes: "",
    },

    {
      id: 13,
      mês: "",
      faturamentoMes: ""
    }])






  //*---Procura e armazena os meses do arquivo JSON----
  dadosJson.faturamentoMensal.forEach(function (mes) {
    meses.push(mes.mês);
  });
  //* -------------------------------------------------
  //*------Define O Mes Atual, Mes anterior e ano Atual---------
  useEffect(() => {
    //* Obtém a data atual
    setDataAtual(new Date());
  }, []);

  useEffect(() => {
    setMesAgora(dataAtual.getMonth() + 1); //* O mês é baseado em zero, então adicionamos 1
    setAnoHoje(dataAtual.getFullYear());
  }, [dataAtual]);

  useEffect(() => {
    if (mesAgora !== 0 && anoHoje !== 0) {
      var mesesAnteriores = [];
      for (var i = 1; i <= 13; i++) {
        var anterior = new Date();
        anterior.setMonth(dataAtual.getMonth() - i);
        mesesAnteriores.push(anterior.getMonth() + 1);
      }

      setMesAtual(mesAgora.toString());
      setAnoAtual(anoHoje.toString());
      setMesAnterior(mesesAnteriores);
    }
  }, [anoHoje, mesAgora]);

  useEffect(() => {
    const mesesInvertidos = [];
    for (let i = 0; i < 13; i++) {
      const mes = meses[mesAnterior[i]];
      mesesInvertidos.push(mes);
    }
    mesesInvertidos.reverse();
    setMesesDeFaturamento(mesesInvertidos);
  }, [mesAnterior]);

  useEffect(() => {
    if (mesAtual.length > 0 && anoAtual.length > 0 && mesesDeFaturamento.length > 0) {

    }
  }, [mesAtual, anoAtual, mesesDeFaturamento]);


  useEffect(() => {
    if (mesesDeFaturamento.length > 0) {
      setEmpresa((prevEmpresa) => {
        const updatedEmpresa = prevEmpresa.map((item, index) => {
          return {
            ...item,
            mês: mesesDeFaturamento[index] || "",
          };
        });
        return updatedEmpresa;
      });

    }
  }, [mesAtual, anoAtual, mesesDeFaturamento]);

  useEffect(() => {
    /*  console.log("Mês atual:", mesAtual);
     console.log("Ano Atual:", anoAtual);
     console.table("Meses anteriores:", mesesDeFaturamento);
     console.table("Empresa:", empresa); */

  }, [empresa])


  //*---------------------------------------------------------

  useEffect(() => {

    if (dadosFormularioMensal.length > 0) {
      console.log('Empresa: ', empresaSimplesNacional)
      
      /*    console.log('SPNacional: ', empresaSimplesNacional)
          console.log('mesAgora:', mesAgora);
          console.log('mesesDeFaturamento:', mesesDeFaturamento);
           */
//!!----------------------------------------------------------------

//!!---------------------------------------------------------------
   


    }

  }, [dadosFormularioMensal])

  useEffect(() => {
    if (dadosFormularioMensal) {
      const anos = dadosFormularioMensal.map((objeto) => objeto.ano);
      setAnoSide(anos);
    }
  }, [dadosFormularioMensal]);

  
useEffect(()=>{
  console.log(atividadeEmpresa)
},[atividadeEmpresa])




  const value = {
    anoSelecionado,
    setAnoSelecionado,
    dadosFormularioMensal,
    setDadosFormularioMensal, anoSide, simplesNacional, setSimplesNacional, lucroPresumido, setLucroPresumido,
    mesAtual, mesAnterior, anoAtual, meses, empresa, setEmpresa, empresaSimplesNacional, setEmpresaSimplesNacional,
    anoHoje, mesesDeFaturamento, atividadeEmpresa, setAtividadeEmpresa



  }

  return (
    <EmpresaContext.Provider value={value}>
      {children}
    </EmpresaContext.Provider>
  )
}

export { EmpresaContext, EmpresaProvider }