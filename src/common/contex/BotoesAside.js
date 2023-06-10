import { createContext, useContext, useState } from "react";
import { EmpresaContext } from "./Empresa";
import { useEffect } from "react";
import { CalculoContext } from "./Calculos";



const BotaoAsideContext = createContext()

const BotaoAsideProvider = ({ children }) => {

  const [graficoLinha, setGraficoLinha] = useState(true)
  const [graficoBarra, setGraficoBarra] = useState(true)
  const [graficoCirculo, setGraficoCirculo] = useState(true)
  const [graficoFaturamento, setGraficoFaturamento] = useState(true)
  const [graficoRestituição, setGraficoRestituição] = useState(true)
  const [teste1, setTeste] = useState(true)
  const [anosMinimizados, setAnosMinimizados] = useState([])
  const [minimizaAba, setMinimizaAba] = useState([])
  const {dadosFormularioMensal, setDadosFormularioMensal} = useContext(EmpresaContext)


 
useEffect(() => {
  const updatedMinimizaAba = dadosFormularioMensal.map(objeto => {
    const matchingItem = minimizaAba.find(item => item.ano === objeto.ano);
    if (matchingItem) {
      // Objeto já existe em minimizaAba, preserva a propriedade 'visivel'
      return { ...matchingItem };
    } else {
      // Objeto é novo, copia do dadosFormularioMensal
      return { ...objeto };
    }
  });

  setMinimizaAba(updatedMinimizaAba);

}, [dadosFormularioMensal]);

/* useEffect(()=>{
console.log(`MinimizaAbaContext: `, minimizaAba)
}, [minimizaAba]) */


  const value = {
    minimizaAba, setMinimizaAba, anosMinimizados, setAnosMinimizados, teste1, setTeste, graficoBarra, setGraficoBarra, graficoLinha, setGraficoLinha, graficoCirculo, setGraficoCirculo,
    graficoFaturamento, setGraficoFaturamento, graficoRestituição, setGraficoRestituição
  }

  return (
    <BotaoAsideContext.Provider value={value}>
      {children}
    </BotaoAsideContext.Provider>
  )

}

export { BotaoAsideContext, BotaoAsideProvider }