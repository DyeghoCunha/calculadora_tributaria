import { EmpresaContext } from '../../common/contex/Empresa'
import ContainerTrib from '../ContainerTrib'
import MostraFaturamento from '../MostraFaturamento'
import TabelaImpostoPresumido from '../TabelaImpostoPresumido'
import styles from './BlocoTabelaImposto.module.scss'
import React, { useContext, useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { BotaoAsideContext } from '../../common/contex/BotoesAside'

export default function BlocoTabelaImposto() {
<<<<<<< HEAD
  const { dadosFormularioMensal, setDadosFormularioMensal, empresa } = useContext(EmpresaContext)
=======
  const { dadosFormularioMensal, setDadosFormularioMensal } = useContext(EmpresaContext)
>>>>>>> 54efe7a2a8cfd7a57a8c780c444232a32dc8551e

  const { anosMinimizados, setAnosMinimizados, setMinimizaAba, minimizaAba } = useContext(BotaoAsideContext)

  function handleClose(index) {
    const novoTeste = [...dadosFormularioMensal]; // Cria uma cópia do array dadosFormularioMensal
    novoTeste.splice(index, 1); // Remove o objeto do array
    setDadosFormularioMensal(novoTeste); // Atualiza o estado com o novo array
  };

<<<<<<< HEAD




useEffect(()=>{
  setMinimizaAba(dadosFormularioMensal)
}, [dadosFormularioMensal])



function handleMinimizar(objeto) {
  setMinimizaAba(prevState => {
    const updatedDadosFormularioMensal = prevState.map(item => {
      if (item.ano === objeto.ano ) {
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
{minimizaAba.visivel || objeto.visivel === false ? null :  (
                <div className={`${styles.containerCard} ${objeto.visivel===false ?  '' : '' }`}>
=======
function handleMinimizar(objeto) {
  if (!anosMinimizados.some(item => item.ano === objeto.ano)) {
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
}

  
  useEffect(() => {
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
  }, [minimizaAba])

  return (
    <section className={styles.containerBlocoTabela}>
      {minimizaAba && (
        <div className={styles.containerTabelas}>
          {dadosFormularioMensal.map((objeto, index) => (
            <ContainerTrib key={index}>

               {objeto.visivel && (
                <div className={`${styles.containerCard} ${objeto.visivel ? '' : '' }`}>
>>>>>>> 54efe7a2a8cfd7a57a8c780c444232a32dc8551e
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
             
<<<<<<< HEAD
             )}
            </ContainerTrib>
          ))}
        </div>
  
=======
               )}
            </ContainerTrib>
          ))}
        </div>
      )}
>>>>>>> 54efe7a2a8cfd7a57a8c780c444232a32dc8551e
    </section>
  )
}
