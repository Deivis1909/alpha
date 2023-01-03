import React from 'react'
import { useNavigate } from 'react-router-dom';
import{useState} from 'react';
import "./SearchForm.css";

const SearchForm = () => {
    const navigate = useNavigate()
    const [query,setQuery] = useState()
    const handleSubmit = (e) => {
        /* nao recarregar a pagina quando usuario clicar em submit*/
        e.preventDefault();
        navigate('/search?q=' +query);

    }

  return (
    
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setQuery(e.target.value) }></input>
            <input type="submit" value="buscar"></input>
        </form>

    
    
  )
}

export default SearchForm