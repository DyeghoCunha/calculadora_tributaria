import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './Paginas/Inicial';
import { DctfImportContextProvider } from './common/contex/DctfImport';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <DctfImportContextProvider>
        <Routes>
        <Route path="/" element={<PaginaInicial />} />
        </Routes>
      </DctfImportContextProvider>
    </BrowserRouter>
  );
}
