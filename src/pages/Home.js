import React from 'react'
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css';  
import { useFetch } from '../hooks/useFetch';

const Home = () => {
  //aula 3 carregamento do hook useFetch
  const url = "http://localhost:3000/products";

  // funcoes do arquivo do hook useFetch
  const {data:items,loading,error} = useFetch(url);

  return (
    <div>
      <h1>Produtos:</h1>

      {error && <p>{error}</p> }

    {/*lista de produtos*/}
      <ul className="products">
        {/*verifica se items existe e faz um items.map percorrendo array  items do banco e construindo o novo array a lista Item */}
      {items && items.map(item => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>R$: {item.price}</p>

          {/*rota dinamica
          link chamada de detalhes com o link no to chama pelo numero do id no array*/}
          
          <Link to={`/products/${item.id}`}>Detalhes</Link>

        </li>
        
      ) )}

      </ul>
      </div>
  )
}

export default Home