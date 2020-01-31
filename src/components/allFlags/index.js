import React,{ useEffect, useState } from 'react'
import api from '../../services/api'

import './styles.css'

export default function AllFlags(){
    const[countries, setCountries] = useState([])

    useEffect(() => {
        async function load(){
            const response = await api.get('/all')

            document.title = 'Countries Api'
            console.log(response.data[0])
            setCountries(response.data)
        } 
        
        load()
    },[])
    
    return (
        <div className="flag-container">
            {countries.map(country => (
                <div className="flag">
                    <img src={country.flag} alt={country.name}/>

                    <div className="info">
                        <h3>{country.name}</h3>
                        
                        <p><strong>Region: </strong>{country.region}</p>
                        <p><strong>Capital: </strong>{country.capital}</p>
                    </div>
                </div>
            ))}
        </div>

        /*
        <div className="flag-container">
            <div className="flag">
                <img src="https://restcountries.eu/data/afg.svg" alt=""/>

                <div className="info">
                    <h3>Afeganistão</h3>
                    
                    <p><strong>Region: </strong>Asia</p>
                    <p><strong>Capital: </strong>Kabul</p>
                </div>
            </div>

            <div className="flag">
                <img src="https://restcountries.eu/data/afg.svg" alt=""/>

                <div className="info">
                    <h3>Afeganistão</h3>
                    
                    <p><strong>Region: </strong>Asia</p>
                    <p><strong>Capital: </strong>Kabul</p>
                </div>
            </div>

            <div className="flag">
                <img src="https://restcountries.eu/data/afg.svg" alt=""/>

                <div className="info">
                    <h3>Afeganistão</h3>
                    
                    <p><strong>Region: </strong>Asia</p>
                    <p><strong>Capital: </strong>Kabul</p>
                </div>
            </div>

            <div className="flag">
                <img src="https://restcountries.eu/data/afg.svg" alt=""/>

                <div className="info">
                    <h3>Afeganistão</h3>
                    
                    <p><strong>Region: </strong>Asia</p>
                    <p><strong>Capital: </strong>Kabul</p>
                </div>
            </div>
        </div>
        */
    )
}