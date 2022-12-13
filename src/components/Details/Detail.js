import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CountryItem from '../CountryItem/CountryItem';
//import Home from '../Home/Home';
import './Details.css';

const Detail = () => {
    const {detailName} = useParams() 
   const [detail, setDetail] = useState([]);
  
   
   useEffect(() => {
    // const url = ;
      fetch(`https://restcountries.com/v2/name/${detailName}`)
          .then(res => res.json())
          .then(data => setDetail(data))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const Detail = detail.find(pd => pd.name === detailName)

    return (
        <>
            <h1>This is a details: {detailName}</h1>
           <CountryItem county={Detail}></CountryItem>
           {/* <Home country={Detail}></Home> */}
        </>
    );
};


export default Detail;