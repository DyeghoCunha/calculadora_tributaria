import styles from './PaginaApresentacao.module.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'

export default function PaginaApresentacao() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Recuperação de créditos tributários para <span className={`${styles.destaque} ${styles.destaqueTitulo}`}>clínicas médicas</span></h1>

      <section className={styles.secaoContainer}>
        <h2 className={styles.subtitulo}>Introdução</h2>

        <p className={styles.paragrafo}>A recuperação de créditos tributários é uma alternativa legal disponível para diversos setores, incluindo as clínicas médicas. Neste artigo, abordaremos a recuperação tributária específica para clínicas médicas, explorando as vantagens proporcionadas para o regime tributário do Lucro Presumido que reduz a presunção do IRPJ de <strong className={styles.destaque}>32%</strong> para <strong className={styles.destaque}>8%</strong> e da Csll de <strong className={styles.destaque}>32%</strong> para <strong className={styles.destaque}>12%</strong> garantindo uma restituição de até <strong className={styles.destaque}>70%</strong> do valor pago. </p>


        <br /> <br />

        <p className={styles.paragrafo}>As clínicas médicas desempenham um papel crucial na sociedade, proporcionando serviços essenciais relacionados à saúde. No entanto, além dessa importante função, as clínicas enfrentam diversas outras preocupações, como a gestão de funcionários, insumos, medicamentos, equipamentos e, naturalmente, a questão dos impostos.

          <br /> <br />

          Diante de tantas responsabilidades, é comum que a atenção para essa última questão seja minimizada. Muitos proprietários de clínicas simplesmente confiam que os valores devidos correspondem aos montantes legalmente estabelecidos em suas obrigações fiscais.

          <br /> <br />

          Surpreendentemente, após uma análise cuidadosa, pode-se descobrir que nem todas as obrigações tributárias são legítimas, o que abre a possibilidade de recuperação dos créditos pagos em excesso pelas clínicas.</p>
      </section>

      <section className={styles.secaoContainer}>
        <h2 className={styles.subtitulo}>Recuperação Tributária para clínicas médicas:</h2>

        <p className={styles.paragrafo}>Desde a promulgação da <strong className={styles.destaque}>Lei nº 9.249/1995</strong>, as clínicas, hospitais e laboratórios enquadrados no regime tributário do Lucro Presumido passaram a ser submetidos a uma apuração diferenciada do Imposto de Renda Pessoa Jurídica (IRPJ) e da Contribuição Social sobre o Lucro Líquido (CSLL).

          <br /> <br />

          Conforme as regras, as empresas do Lucro Presumido são obrigadas a recolher o IRPJ e a CSLL com base em uma presunção de <strong className={styles.destaque}>32%</strong> sobre a receita bruta. No entanto, quando se trata de serviços médicos relacionados à saúde, essa presunção sofre algumas alterações.

          <br /> <br />

          Para clínicas médicas enquadradas no Lucro Presumido, devido à redução da base de cálculo, a alíquota do IRPJ passa a ser de <strong className={styles.destaque}>8%</strong> (conforme o artigo 15, caput, da Lei 9.249), enquanto a alíquota da CSLL se torna <strong className={styles.destaque}>12%</strong> (conforme o artigo 20, inciso III, da Lei 9.249).

          <br /> <br />

          Esses dois impostos compõem grande parte da carga tributária para empresas desse segmento. Recuperar esses valores pode gerar <strong className={styles.destaque}>economias significativas</strong> para as clínicas que buscam a revisão tributária.

          <br /> <br />

          Como mencionado anteriormente, nem todas as clínicas médicas podem recuperar créditos tributários. No entanto, aquelas que estão enquadradas no Lucro Presumido e atendem a certas condições podem solicitar a revisão dos créditos tributários pagos nos últimos <strong className={styles.destaque}>cinco anos</strong> (60 meses).
        </p>
        <br /> <br />


        <h3 className={styles.tituloLista}>Algumas clínicas que podem recorrer à recuperação tributária: </h3>
        <ul className={styles.listaContainer}>
          <li className={styles.listaItem}><FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} />Clínica de fonoaudiologia</li>
          <li className={styles.listaItem}><FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} />Clínicas de cirurgias plásticas</li>
          <li className={styles.listaItem}> <FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} />Clínicas de fisioterapia</li>
          <li className={styles.listaItem}> <FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} />Clínicas de oftalmologia</li>
          <li className={styles.listaItem}><FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} /> Clínicas de ortopedia e traumatologia</li>
          <li className={styles.listaItem}><FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} /> Clínicas de procedimentos dermatológicos</li>
          <li className={styles.listaItem}><FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} /> Clínicas e laboratórios que realizam exames de imagem</li>
          <li className={styles.listaItem}> <FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} />Clínicas odontológicas</li>
          <li className={styles.listaItem}><FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} /> Clínicas pediátricas</li>
          <li className={styles.listaItem}><FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} /> Clínicas que realizam exames de diagnóstico</li>
          <li className={styles.listaItem}><FontAwesomeIcon icon={faCircleDot} className={styles.iconeDot} />Empresas de home care</li>
        </ul>

        <p className={styles.paragrafo}> Além do enquadramento no Lucro Presumido, é importante ressaltar que a clínica deve ser uma sociedade empresária <strong className={styles.destaque}>(não pode ser uma EIRELI ou sociedade simples) </strong>e deve possuir autorização de funcionamento confirmada pela ANVISA (Agência Nacional de Vigilância Sanitária).

          <br /> <br />

          Cabe destacar que a Receita Federal não notifica os negócios sobre a possibilidade de recuperação de créditos tributários. Portanto, para descobrir se sua clínica médica tem direito à recuperação de créditos tributários, é fundamental contar com o auxílio de uma empresa especializada. </p>

      </section>

      <section className={styles.secaoContainer}>

        <h2 className={styles.subtitulo}>Benefícios da recuperação tributária para clínicas:</h2>

        <p className={styles.paragrafo}>A recuperação de créditos tributários é um processo legal que pode ser realizado tanto administrativamente quanto judicialmente. Apesar de ser um procedimento relativamente simples, ainda é pouco conhecido entre os empresários, o que confere à clínica médica que solicita a recuperação dos créditos uma vantagem competitiva significativa em relação à concorrência.

          <br /> <br />

          Um acompanhamento tributário diligente pode revelar brechas legais para a redução da carga tributária, possibilitando que a empresa pague significativamente menos impostos do que inicialmente acreditava ser obrigada a pagar.

          <br /> <br />

          Após o levantamento de todos os pagamentos tributários dos últimos cinco anos, é possível identificar os tributos pagos indevidamente, solicitando a recuperação dos valores pagos a mais durante esse período de<strong className={styles.destaque}> 60 meses.</strong>

          <br /> <br />

          Para descobrir se sua clínica médica possui direito à recuperação de créditos tributários, clique no botão <a className={styles.linkBotao} href='/'>Diagnóstico Tributário Gratuito</a>  e receba, em até 48 horas, o contato de um de nossos consultores. Mas se estiver curioso veja uma estimativa clicando em <a className={styles.linkBotao} href='/'>Simulação de Crédito</a>
        </p>
      </section>

    <section className={styles.secaoContainer}>

        <h2 className={styles.subtitulo}>Contato e Serviços da GroselhaCont</h2>
    

        <p className={styles.paragrafo}> No Brasil, as obrigações tributárias são abrangentes e frequentemente representam um ônus considerável para as empresas. No setor da saúde, a tributação é particularmente complexa, uma realidade bem conhecida pelos empreendedores do ramo. No entanto, muitos desconhecem a possibilidade de obter créditos tributários, o que pode contribuir para a redução de custos e o aumento da rentabilidade das clínicas.

          <br /> <br />

          As clínicas estão sujeitas a diversas obrigações fiscais e tributárias, que podem resultar em custos significativos para o negócio.</p>

    



  

        <p className={styles.paragrafo}>A GroselhaCont oferece serviços especializados em recuperação de créditos tributários para clínicas médicas. Por meio de uma análise minuciosa da situação fiscal da clínica, é possível identificar os tributos pagos indevidamente e solicitar a recuperação dos valores pagos a mais. Isso pode gerar uma melhoria significativa na saúde financeira das clínicas médicas.</p>

        <br /><br />

        <p className={styles.paragrafo}>Não deixe de entrar em contato com a GroselhaCont para obter mais informações sobre como sua clínica médica pode se beneficiar da recuperação de créditos tributários e reduzir seus custos. Aproveite a oportunidade de realizar um <a className={styles.linkBotao} href='/'>Diagnóstico Tributário Gratuito</a>para descobrir se sua clínica é elegível para esse processo. E se ainda etiver com dúvidas sobre as vantagens </p>

      </section>
    </div>
  );
}

