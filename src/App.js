
import './App.css';
import Home from './pages/Home';
import Produtos from './pages/Produto';
import ProductDetails from './pages/ProductDetails'
// Para navegar entre páginas de uma aplicação React, criaremos rotas 
// utilizando o https://reactrouter.com/en/main 
// Componentes que usuaremos da lib:
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='products' element={<Produtos />}></Route>
          {/*Roteamento aninhado, onde id será o parâmetro do caminho*/}
          <Route path='/products/:id' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
