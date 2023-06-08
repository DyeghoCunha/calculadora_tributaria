import styles from './GraficoLinha.module.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useContext } from 'react'
import { FaturamentoInputContext } from '../../../common/contex/FaturamentoInput';
import { GraficoContext } from '../../../common/contex/GraficoContext';





export default function GraficoLinha() {


  const {faturamentoMensal, anoAtual, anoRetroativo, faturamentoMensalComAno} = useContext(FaturamentoInputContext)
 const {dataKeys,data,getLineColor} = useContext(GraficoContext) 
  

  return (
    
    <div className={styles.container} >
      <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="mes" tick={{ fill: 'green', fontSize: 18 }} />
        <YAxis tick={{ fill: 'green', fontSize: 15 }} />
        <Tooltip contentStyle={{ borderRadius: '8px' }} wrapperStyle={{ border: '1px solid green', borderRadius: '8px' }} />
        <Legend />
        {dataKeys.map((key, index) => (
          <Line
            key={index}
            type="monotone"
            strokeWidth={2}
            dataKey={key}
            stroke={getLineColor(index)} // Função fictícia para definir a cor da linha com base no índice
            dot={{ r: 1 }}
            activeDot={{ r: 4 }}
          />
        ))}
      </LineChart>
      </ResponsiveContainer>
    </div>
    
  );
}