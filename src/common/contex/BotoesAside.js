import { createContext, useState } from "react";



const BotaoAsideContext = createContext()

const BotaoAsideProvider = ({children})=>{

  const [graficoLinha , setGraficoLinha] = useState(true)
  const [graficoBarra, setGraficoBarra] = useState(true)
  const [graficoCirculo, setGraficoCirculo]= useState(true)
  const[graficoFaturamento, setGraficoFaturamento]= useState(true)
  const[graficoRestituição, setGraficoRestituição] = useState(true)

const value ={
graficoBarra,setGraficoBarra,graficoLinha,setGraficoLinha,graficoCirculo,setGraficoCirculo,
graficoFaturamento,setGraficoFaturamento,graficoRestituição,setGraficoRestituição
}

return(
<BotaoAsideContext.Provider value={value}>
  {children}
</BotaoAsideContext.Provider>
)

}

export {BotaoAsideContext,BotaoAsideProvider}