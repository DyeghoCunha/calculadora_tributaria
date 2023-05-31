import './GraficoCirculo.module.scss'

import styles from './GraficoCirculo.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const GraficoCircular = ({ valorPago = 100, valorCorreto = 40, nomeImposto = 'Imposto' }) => {
  // Calcular a porcentagem do valor correto e do valor a restituir
  const porcentagemCorreto = (valorCorreto / valorPago) * 100;
  const porcentagemRestituir = 100 - porcentagemCorreto;

  // Calcular o comprimento dos traços
  const comprimentoCircunferencia = Math.PI * 2 * 80; // 2 * PI * raio
  const comprimentoCorreto = (porcentagemCorreto / 100) * comprimentoCircunferencia;
  const comprimentoRestituir = (porcentagemRestituir / 100) * comprimentoCircunferencia;
  const total = porcentagemCorreto + porcentagemRestituir;
  // Calcular o offset do traço do valor correto
  const offsetCorreto = 0;

  return (
    <div className={styles.container}>
      {/*  <h3 className={styles.titulo}>Valor Pago: R$ {valorPago} </h3> */}
      <h3 className={styles.titulo}>{nomeImposto}</h3>
      <svg width="200" height="200" className={styles.circulosSgvContainer}>
        <circle cx="100" cy="100" r="80" fill="#eaeaea"
          stroke="#ff0000"
          strokeWidth="18"
        />

        <circle
          cx="100"
          cy="100"
          r="80"
          fill="transparent"

          strokeWidth="16"
          strokeDasharray={`${comprimentoCorreto} ${comprimentoRestituir}`}
          strokeDashoffset={`${offsetCorreto}`}
          transform="rotate(-90 100 100)"

        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="transparent"
          strokeWidth="10"
          strokeDasharray={`${comprimentoRestituir} ${comprimentoCorreto}`}
          strokeDashoffset={`${-comprimentoCorreto}`}
          transform="rotate(-90 100 100)"
        />

      </svg>
      <div className={styles.circuloExterno}></div>
      <div className={styles.porcentagemMeioContainer}>
        <span className={styles.porcentagemMeio}>  {porcentagemRestituir.toFixed()}%</span>
      </div>
      <div className={styles.valoresContainer}>
        <p className={styles.valores}>{/* <FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} /> */} Valor Pago: R$ {valorPago}</p>
        <p className={styles.valores}>{/* <FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} /> */} Valor a Restituir R$ {(valorPago - valorCorreto)} </p>
      </div>
    </div>
  );
};

export default GraficoCircular;

