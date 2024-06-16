'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Countrylag from 'react-country-flag';


const GiftsPage=()=>{
    const router = useRouter();
    const {query}=router;
   
    const [gifts, setGifts] = useState([]);
    
    useEffect(()=>{
        if(Object.keys(query).length>0){
            fetchGifts(query);
        }
    }, [query]);  

 
        
    const fetchGifts = async (queryParams)=>{
        try{
            const queryString = new URLSearchParams(queryParams).toString();
            const response = await fetch(`/api/getGifts?${queryString}`);
            const data = await response.json();
            setGifts(data.gifts);
        } catch (error){
            console.error('Error fetching gifts:', error);
        }

            
        };
       
















    return(
        <div>
            <h1>Recommended Gifts</h1>
            <ul>
                {gifts.map((gift, index)=>(
                    <li key ={index}>
                        <a href={gift.url} target="_blank" rel="noopener noreferrer">
                            <img src={gift.image} alt={gift.title} style={{width:'100px', height: '100px'}}/>
                            <p>{gift.title}</p>
                            <p>{gift.price}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>





    );


    
};

export default GiftsPage;