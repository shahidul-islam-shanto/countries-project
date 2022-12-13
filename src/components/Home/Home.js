import React, { useEffect, useState } from 'react';
import CountryItem from '../CountryItem/CountryItem';
import {v4 as uuidv4} from 'uuid'
import './Home.css';
import Search from '../search/Search';

const Home = () => {
    const [country, setCountry] = useState([])
    const [loading, setLoading] = useState(true)

   useEffect(() => {
     fetch('https://restcountries.com/v2/all')
          .then(res => res.json())
          .then(data => {
            setCountry(data) 
            setLoading(false)
        })
   }, [])
   const removeCountry = (name) =>{
   const filter = country.filter(names => names.name !== name)
   setCountry(filter)
   }
   const handleSearch = (search) =>{
    //   alert(search)
    let value = search.toLowerCase();
    const newCountry = country.filter(pd => {
        const countryName = pd.name.toLowerCase();

        return countryName.startsWith(value)
    })
    setCountry(newCountry);
   }
    return (
        <div>
            <div>
                <h1>Country App</h1>
                <Search search={handleSearch}/>
            </div>
           <div className='home-area'>
            {loading && <h4>Loading...</h4>}
            {
            country.map(country =>{
                 const CountryAll = {country, id: uuidv4()}
                 return (<CountryItem {...CountryAll} key={CountryAll.id} 
        
                     removeCountry={removeCountry}/>)
                })
            }
            </div>
        </div>
       
    );
};

export default Home;