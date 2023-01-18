import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Search.css';

    const Search = (props) => {

    const [search, setSearch] = useState('') 
    const [color, setColor] = useState(false)

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[search])
    return (
             <div className='input-area'>
             <input 
             type="text" 
             name='name' 
             placeholder='Search Country...'           
             value={search} 
             onChange={textSearch}
             className={`${color && "valid"}`}
            //   style={{backgroundColor: color ? "red" : "yellow"}}
              / >
        </div>
    );
};

export default Search;



