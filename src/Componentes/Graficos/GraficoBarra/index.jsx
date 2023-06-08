import styles from './GraficoBarra.module.scss'
import React, { PureComponent, useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ContainerTrib from '../../ContainerTrib';
import { GraficoContext } from '../../../common/contex/GraficoContext';


export default function GraficoBarra() {

  const { dataKeys, data, getLineColor } = useContext(GraficoContext)

  return (
   
      <div className={styles.container}>
<ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="mes" tick={{ fill: 'green', fontSize: 10 }} />
          <YAxis tick={{ fill: 'green', fontSize: 10 }} />
          <Tooltip contentStyle={{ borderRadius: '8px' }} wrapperStyle={{ border: '1px solid green', borderRadius: '8px' }} />
          <Legend  fontSize={1} />
          {dataKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={getLineColor(index)}
            />
          ))}
        </BarChart>
        </ResponsiveContainer>
      </div>
 
  );
}
