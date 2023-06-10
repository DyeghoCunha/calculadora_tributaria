import { EmpresaContext } from '../../common/contex/Empresa'
import ContainerTrib from '../ContainerTrib'
import MostraFaturamento from '../MostraFaturamento'
import TabelaImpostoPresumido from '../TabelaImpostoPresumido'
import styles from './BlocoTabelaImposto.module.scss'
import React, { useContext, useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { BotaoAsideContext } from '../../common/contex/BotoesAside'




export default function BlocoTabelaImposto() {
  const { dadosFormularioMensal, setDadosFormularioMensal } = useContext(EmpresaContext)

  const { teste1, setTeste, anosMinimizados, setAnosMinimizados, setMinimizaAba, minimizaAba } = useContext(BotaoAsideContext)
 
  const teste = [
    {
      ano: 2018,
      faturamento: 10,
      pis: 10,
      irT: 10,
      csll: 10,
      irRestituir: 10,
      csllRestituir: 10,
      cofinsRestituir: 10,
      pisRestituir: 10,
    },
    {
      ano: 2018,
      faturamento: 10,
      pis: 10,
      irT: 10,
      csll: 10,
      irRestituir: 10,
      csllRestituir: 10,
      cofinsRestituir: 10,
      pisRestituir: 10,
    },
    {
      ano: 2018,
      faturamento: 10,
      pis: 10,
      irT: 10,
      csll: 10,
      irRestituir: 10,
      csllRestituir: 10,
      cofinsRestituir: 10,
      pisRestituir: 10,
    },
    {
      ano: 2018,
      faturamento: 10,
      pis: 10,
      irT: 10,
      csll: 10,
      irRestituir: 10,
      csllRestituir: 10,
      cofinsRestituir: 10,
      pisRestituir: 10,
    },
    {
      ano: 2018,
      faturamento: 10,
      pis: 10,
      irT: 10,
      csll: 10,
      irRestituir: 10,
      csllRestituir: 10,
      cofinsRestituir: 10,
      pisRestituir: 10,
    }
    ,
    {
      ano: 2019,
      faturamento: 10,
      pis: 10,
      irT: 10,
      csll: 10,
      irRestituir: 10,
      csllRestituir: 10,
      cofinsRestituir: 10,
      pisRestituir: 10,
    },
    // Outros objetos de teste
  ]
//!! As informações estão sendo trocadas em minimizaAba e não estão sendo repassadas para o dadosFormulario




  function handleClose(index) {
    const novoTeste = [...dadosFormularioMensal]; // Cria uma cópia do array teste
    novoTeste.splice(index, 1); // Remove o objeto do array
    setDadosFormularioMensal(novoTeste); // Atualiza o estado com o novo array
  };

  function handleMinimizar(objeto) {
    if (!anosMinimizados.some(item => item.ano === objeto.ano)) {
      const updatedDadosFormularioMensal = dadosFormularioMensal.map(item => {
        if (item.ano === objeto.ano) {
          return { ...item, visivel: false }; // Adiciona a propriedade visivel ao objeto existente
        }
        return item;
      });
     /*  setDadosFormularioMensal(updatedDadosFormularioMensal); */
      setMinimizaAba(updatedDadosFormularioMensal);
    }
  }
  
  useEffect(()=>{

  })
  



useEffect(()=>{

  const updatedDadosFormularioMensal = dadosFormularioMensal.map(objeto => {
  const matchingItem = minimizaAba.find(item => item.ano === objeto.ano);
  if (matchingItem) {
    // Atualize os valores desejados no 'objeto'
    return { ...objeto, faturamento: matchingItem.novoValor };
  }
  return objeto;
});

// Atualize o estado do 'dadosFormularioMensal' com as informações atualizadas
setDadosFormularioMensal(updatedDadosFormularioMensal);

console.log('Repasse: ', dadosFormularioMensal)

},[minimizaAba])


  {/* {dadosFormularioMensal.map((objeto, index) => ( */ }
  return (
<>
    
    <section className={styles.containerBlocoTabela}>

   {/*    <div className={styles.barraSuperior}>
        {dadosFormularioMensal.map((objeto, index) => (
          <button key={index} className={styles.anoBotao}>
            {objeto.ano}
          </button>
        ))}
      </div> */}

{minimizaAba && (
      <div className={styles.containerTabelas}>

{dadosFormularioMensal.map((objeto, index) => (

  
    <ContainerTrib key={index}>
    {objeto.visivel && (
      <div className={`${styles.containerCard} ${objeto.visivel ? styles.aparece : styles.esconde }`}>
        <div className={styles.containerAno}>
          <h1 className={styles.titulo}>{objeto.ano}</h1>
          <button className={styles.botaoClose} onClick={() => handleClose(index)}><strong>X</strong></button>
          <button className={styles.botaoMinimiza} onClick={() => handleMinimizar(objeto)}><FaArrowUp /></button>
        </div>
        <MostraFaturamento inputValor={objeto.faturamento} />
        <div className={styles.tabelaImposto}>
          <TabelaImpostoPresumido
            propsIr={objeto.irT}
            propsCsll={objeto.csll}
            propsPis={objeto.pis}
            propsCofins={objeto.cofins}
            propsIrRestituir={objeto.irRestituir}
            propsCsllRestituir={objeto.csllRestituir}
            propsCofinsRestituir={objeto.cofinsRestituir}
            propsPisRestituir={objeto.pisRestituir}
          />
        </div>
      </div>
    )}
    </ContainerTrib>

))}

        
      </div>
   )}
    </section>
 
    </>
  )
}
