import styles from './GraficoBarra.module.scss'
import React, { PureComponent, useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ContainerTrib from '../../ContainerTrib';
import { GraficoContext } from '../../../common/contex/GraficoContext';


export default function GraficoBarra({ width = 860, height = 300 }) {

  const { dataKeys, data, getLineColor } = useContext(GraficoContext)

  return (
    <ContainerTrib>
      <div className={styles.container}>
        <BarChart
          data={data}
          height={height}
          width={width}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="mes" tick={{ fill: 'green', fontSize: 18 }} />
          <YAxis tick={{ fill: 'green', fontSize: 15 }} />
          <Tooltip contentStyle={{ borderRadius: '8px' }} wrapperStyle={{ border: '1px solid green', borderRadius: '8px' }} />
          <Legend />
          {dataKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={getLineColor(index)}



            />
          ))}
        </BarChart>
      </div>
    </ContainerTrib>
  );
}
