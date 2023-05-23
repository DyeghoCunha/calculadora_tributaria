
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './Paginas/Inicial';


export default function AppRoutes() {
  return (
    <BrowserRouter>

      
      <Routes>
      <Route path='/' element={<PaginaInicial/>}/>

      </Routes>

     

    </BrowserRouter>
  )
}
