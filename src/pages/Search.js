import React from 'react'
import { useSearchParams,Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {

    const [searchParams] = useSearchParams();

    const url = "http://localhost:3000/products?" + searchParams;

    const {data: items,loading,error} = useFetch(url);

  return (
    <div>
        <h1>resultados disponiveis</h1>
        <ul className="produts">
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

export default Search