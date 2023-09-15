
import './styles/estilosGlobais.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './Paginas/Inicial';
import { DctfImportContextProvider } from './common/contex/DctfImport';
import NavBar from './Componentes/NavBar';
import { FaturamentoInputProvider } from './common/contex/FaturamentoInput';
import PaginaApresentacao from './Paginas/Inicial/Apresentacao';
import PaginaFaturamentoAnual from './Paginas/PaginaFaturamentoAnual';
import PaginaFaturamentoMensal from './Paginas/PaginaFaturamentoMensal';
import { CalculoProvider } from './common/contex/Calculos';
import { EmpresaProvider } from './common/contex/Empresa';
import { BotaoAsideProvider } from './common/contex/BotoesAside';
import PaginaSimplesNacional from './Paginas/PaginaSimplesNacional';
import PaginaSeletorAtividade from './Paginas/PaginaSeletorAtividade';
import PaginaSeletorDeServicos from './Paginas/PaginaSeletorDeServicos';





export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <EmpresaProvider>

        <CalculoProvider>
          <DctfImportContextProvider>
            <FaturamentoInputProvider>
              <BotaoAsideProvider>
                <Routes>
                  <Route path="/apresentacao" element={<PaginaApresentacao/>} /> 
                    <Route path="/" element={<PaginaInicial />} /> 
                   <Route path="/anual" element={<PaginaFaturamentoAnual />} />  
                  <Route path="/mensal" element={<PaginaFaturamentoMensal />} /> 
                 <Route path="/seletor" element={<PaginaSeletorDeServicos/>} />
                </Routes>
              </BotaoAsideProvider>
            </FaturamentoInputProvider>
          </DctfImportContextProvider>
        </CalculoProvider>

      </EmpresaProvider>
    </BrowserRouter>
  );
}
