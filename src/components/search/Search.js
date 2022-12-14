import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Search.css';

    const Search = (props) => {

    const [search, setSearch] = useState('') 
    const [color, setColor] = useState(true)

    const textSearch = (e) =>{
        setSearch(e.target.value);           
    }
    useEffect(()=> {
        // alert(search)
        if(search.length < 2){
            setColor(false)
        }else{
            setColor(true)
        }
         props.search(search)
        },[search])
    return (
        <>
             <div className='input-area'>
             <input 
             type="text" 
             name='name' 
             placeholder='Search Country...'           
              value={search} 
              onChange={textSearch}
              style={{backgroundColor: color ? "red" : "yellow"}}
              / >
        </div>
        </>
    );
};

export default Search;



