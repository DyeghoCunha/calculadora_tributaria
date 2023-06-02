
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



export default function AppRoutes() {
  return (
    <BrowserRouter>
       <NavBar/>
       <CalculoProvider> 
      <DctfImportContextProvider>
        <FaturamentoInputProvider>        
        <Routes>
       {/*  <Route path="/" element={<PaginaApresentacao/>} /> */}
       {/*  <Route path="/" element={<PaginaInicial />} /> */}
       {/*  <Route path="/" element={<PaginaFaturamentoAnual />} />  */}
        <Route path="/" element={<PaginaFaturamentoMensal />} />
        
        </Routes>
        </FaturamentoInputProvider>
      </DctfImportContextProvider>
      </CalculoProvider>
    </BrowserRouter>
  );
}
