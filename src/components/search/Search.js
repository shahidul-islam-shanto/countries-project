import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Search.css';

    const Search = (props) => {

    const [search, setSearch] = useState('') 

    const textSearch = (e) =>{
        setSearch(e.target.value);           
    }
    useEffect(()=> {
        // alert(search)
         props.search(search)
        },[search])
    return (
        <>
             <div className='input-area'>
             <input type="text" name='name' placeholder='Search Country...'           
              value={search} onChange={textSearch}/ >
        </div>
        </>
    );
};

export default Search;



