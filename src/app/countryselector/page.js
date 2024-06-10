
import React, { useState } from 'react';

const CountrySelector =()=>{
    const[selectedCountry, setSelectedCountry]=useState('us');

    const handleChange=(event)=>{
        const country=event.target.value;
        setSelectedCountry(country);
        console.log(`Country changed to: ${country}`);
    };

    return(
        <div className="country-selector">
            <select id="country-dropdown" value={selectedCountry} oonChanged={handleChange}>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="fr">France</option>
                <option value="jp">Japan</option>
            </select>

            <style jsx>{`
            .country-selector{
            position: fixed;
            top:10px;
            right: 10px;
            z-index:1000;
            }
            #country-dropdown{
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: white;
            cursor: pointer;
            }
            #country-dropdown:hover{
            border-color: #888;
            }
            #country-dropdown option{
            padding: 10px;
            font-size: 16px;
            }
            
            
            
            `
}</style>
        </div>
    )


    






}

export default CountrySelector;