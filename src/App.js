// config react router
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      
      <h1>Empresa Routes</h1> 
      {/*carregando links */}
      <BrowserRouter>
      <Navbar />
      {/* trazendo o formulario de busca */}
      <SearchForm />
    
      <Routes>
        
        
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/**rota dinamica */}
        <Route path="/products/:id" element={<Product />} />
        
        {/** nested route rota dinamica composta com 2 elementos paramentros id e / info */}
        <Route path="/products/:id/info" element={<Info />} />

        {/* formulario serch de busca */}
        <Route path="/Search" element={<Search />} />

        {/* 7 no match route asterisco no path configura pagina nao encontrada*/}
        <Route path="*" element={<NotFound />} />
        
        

      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
