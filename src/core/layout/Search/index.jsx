import React,{useState} from "react";
import InputSearch from "./InputSearch";
import { Container } from "./style";
import FilterOptions from "./FilterOptions";
import SearchResults from "./searchResults";
import {getSearchedMovies} from '@/core/service'


const HomeSearch = () => {
    const [show,setShow]=useState(false)
    
    const [type,setType]=useState('movies')
    const [value,setSearchValue]=useState('')
    const {data} =getSearchedMovies({type,value})


    const handleChange=()=>{
        setShow((prevState)=>!prevState)
    }

    const handleSearchValue=(e)=>{
        setSearchValue(e.target.value)
    }

    const handleTypeValue=(e)=>{
        setType(e.target.value)
    }

  return (
    <Container>
        <InputSearch onClick={handleChange} onChange={handleSearchValue} value={value} name='search'/>
       {show && <FilterOptions handleTypeValue={handleTypeValue} type={type}/>}
       <SearchResults data={data} type={type} />
    </Container>
  );
};

export default HomeSearch;
