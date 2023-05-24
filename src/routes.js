
import './styles/estilosGlobais.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './Paginas/Inicial';
import { DctfImportContextProvider } from './common/contex/DctfImport';
import NavBar from './Componentes/NavBar';



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar/>
      <DctfImportContextProvider>
        <Routes>
        <Route path="/" element={<PaginaInicial />} />
        </Routes>
      </DctfImportContextProvider>
    </BrowserRouter>
  );
}
