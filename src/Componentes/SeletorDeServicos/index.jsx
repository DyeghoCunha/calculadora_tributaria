import { EmpresaContext } from '../../common/contex/Empresa';
import styles from './SeletorDeServicos.module.scss';
import React, { useContext } from 'react';

export default function SeletorDeServicos() {
  const { setAtividadeEmpresa } = useContext(EmpresaContext);

  const handleAtividade = (atividade) => {
    setAtividadeEmpresa(atividade);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Escolha o Ramo do seu Serviço</h1>

      <div className={`${styles.ramoServico} ${styles.servico}`}>
        <h1 className={styles.tituloServico}>Serviço</h1>
        <p className={styles.paragrafoServico}>Serviço é uma atividade em que uma pessoa ou empresa faz algo para ajudar outras pessoas ou empresas. É como contratar alguém para fazer um trabalho específico para você.<br /><br /> Por exemplo, ir ao médico quando você está doente, pedir comida em um restaurante ou ter alguém consertando seu carro. Serviços são coisas que você não pode tocar, como produtos, mas que ajudam a resolver problemas ou atender necessidades. <br /><br /> Eles podem incluir áreas como saúde, transporte, educação, entretenimento e muito mais. Os serviços são importantes porque ajudam a satisfazer as necessidades das pessoas e contribuem para o funcionamento da economia.
        <br /><br />

        <span className={styles.realce}>A lista de serviço apresentada aqui é apenas um guia, se o seu serviço não estiver listado, não se preocupe, na dúvida, escolha o <strong>Anexo III</strong>
        </span></p>
       


      </div>

      <div className={`${styles.ramoServico} ${styles.anexo3}`} onClick={() => handleAtividade('anexo3')}>
        <h1 className={styles.tituloServico}>Anexo III</h1>
        <div className={styles.paragrafoServico}>
          <ul>
            <li>Serviços de saúde, como médicos, dentistas, fisioterapeutas, psicólogos, entre outros</li>
            <li>Serviços de educação, como escolas, cursos técnicos, preparatórios, idiomas, entre outros</li>
            <li>Serviços de advocacia, consultoria jurídica e contabilidade</li>
            <li>Serviços de engenharia, arquitetura, consultoria técnica e urbanismo</li>
            <li>Serviços de corretagem de imóveis e de seguro</li>
            <li>Serviços de pesquisa, desenvolvimento e testes em ciências sociais e naturais</li>
            <li>Serviços de publicidade e propaganda</li>
            <li>Serviços de tecnologia da informação, como desenvolvimento de software, suporte técnico, entre outros</li>
            <li>Serviços de design, decoração, paisagismo e similares</li>
            <li>Serviços de entretenimento, cultura, recreação e lazer, como eventos, agências de turismo, produção de filmes, entre outros</li>
          </ul>
        </div>
      </div>

      <div className={`${styles.ramoServico} ${styles.anexo4}`} onClick={() => handleAtividade('anexo4')}>
        <h1 className={styles.tituloServico}>Anexo IV</h1>
        <div className={styles.paragrafoServico}>
          <ul>
            <li>Serviços de transporte de cargas e passageiros</li>
            <li>Serviços de construção civil, empreiteiras, serviços de pintura, instalação elétrica</li>
            <li>Serviços de vigilância, segurança e limpeza</li>
            <li>Serviços de medicina veterinária</li>
            <li>Serviços de fisioterapia, nutrição, fonoaudiologia e terapia ocupacional</li>
            <li>Serviços de arquivologia, tradução e interpretação, ensino de idiomas</li>
            <li>Serviços de laboratórios de análises clínicas e de diagnóstico por imagem</li>
            <li>Serviços de escritório de contabilidade e auditoria</li>
            <li>Serviços de assistência técnica, manutenção e reparação de máquinas e equipamentos</li>
            <li>Serviços de agências de viagem</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
