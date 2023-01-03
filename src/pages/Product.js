import React from 'react'
import { useParams } from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'
import { Link } from "react-router-dom";

const Product = () => {
  // aula 4 rota/link dinamica 
  //vai pegar ID com OS PARAMETROS DA URL useParams()
  // vindos do app.js
  const {id} = useParams(); 

  //aula 5 carregamento dado individual
  // recebendo parametros da url 
  const url ="http://localhost:3000/products/"+id;

  //e transformando em 
  //um objeto data a url concatenando com os parametros recbidos
  const {data: product,loading,error} = useFetch(url);
  console.log(product);
  
  


  return (

    //imprimindo dados se tem erro imprime isso , se tem loading imprimi aquilio
      <div>
      <p>ID produto:{id}</p>
      {error && <p>ocorreu um erro</p>}
      {loading && <p>carregando...</p>}
      {product&& (
        <div>
          <h1>{product.name}</h1>
          <p>R$:{product.price}</p>
          {/*6 nested routed links compostos */}
          <Link to={`/products/${product.id}/info`}>mais informacoes</Link>

        </div>
      )}
      </div>
        
  )
}

export default Product