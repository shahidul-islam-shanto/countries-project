import React from 'react';
import './CountryItem.css';


const CountryItem = (props) => {
  
   const {country} = props;
    const {name, subregion, capital, flag} = country;

    const handleRemove = (name) => {
        props.removeCountry(name)
    }
    return (
        <div className='country-container'>
            <div className='img-area'> 
                <img src={flag} alt="" />
            </div>
            <div className='country-area'>
                <h3> {name}</h3>
                <p><small>Capital: {capital}</small></p>
                <p><small>Area: {subregion}</small></p>
                <button className='button' onClick={()=>handleRemove(name)}>Remove</button>
                
           </div>
        </div>
    );
};

export default CountryItem;