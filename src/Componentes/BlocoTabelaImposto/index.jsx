import { EmpresaContext } from '../../common/contex/Empresa'
import ContainerTrib from '../ContainerTrib'
import MostraFaturamento from '../MostraFaturamento'
import TabelaImpostoPresumido from '../TabelaImpostoPresumido'
import styles from './BlocoTabelaImposto.module.scss'
import React, { useContext, useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { BotaoAsideContext } from '../../common/contex/BotoesAside'
import { FaturamentoInputContext } from '../../common/contex/FaturamentoInput'

export default function BlocoTabelaImposto() {
  const { dadosFormularioMensal, setDadosFormularioMensal } = useContext(EmpresaContext)

  const { setMinimizaAba, minimizaAba } = useContext(BotaoAsideContext)
  const { faturamentoMensalComAno, setFaturamentoMensalComAno } = useContext(FaturamentoInputContext)

  function handleClose(index,objeto) {
    console.log('Index: ',index)
    const novoTeste = [...dadosFormularioMensal]; // Cria uma cópia do array dadosFormularioMensal
    novoTeste.splice(index, 1); // Remove o objeto do array
    setDadosFormularioMensal(novoTeste); // Atualiza o estado com o novo array
  };





  useEffect(() => {
    setMinimizaAba(dadosFormularioMensal)
  }, [dadosFormularioMensal])



  function handleMinimizar(objeto) {
    setMinimizaAba(prevState => {
      const updatedDadosFormularioMensal = prevState.map(item => {
        if (item.ano === objeto.ano) {
          return { ...item, visivel: false }; // Adiciona a propriedade visivel ao objeto existente
        }
        return item;
      });
      return updatedDadosFormularioMensal;
    });
  }



  /*   useEffect(() => {
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
    }, [minimizaAba]) */

  return (
    <section className={styles.containerBlocoTabela}>

      <div className={styles.containerTabelas}>
        {minimizaAba.map((objeto, index) => (
          <ContainerTrib key={index}>
            {minimizaAba.visivel || objeto.visivel === false ? null : (
              <div className={`${styles.containerCard} ${objeto.visivel === false ? '' : ''}`}>
                <div className={styles.containerAno}>
                  <h1 className={styles.titulo}>{objeto.ano}</h1>
                  <button className={styles.botaoClose} onClick={() => handleClose(index,objeto.ano)}><strong>X</strong></button>
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

    </section>
  )
}
