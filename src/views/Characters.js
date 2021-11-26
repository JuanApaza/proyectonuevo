import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardCharacters from '../components/CardCharacters'
import Footer from '../components/Footer'



export default function Characters() {
    const n=4;
    const [datos, setDatos] = useState({
        data: []
    })
    const [hasError, setError] = useState(false)
    const fetchCharacter = async () => {
        const response = await fetch('https://api.aniapi.com/v1/random/anime/20')
        response
            .json()
            .then(response => setDatos(response))
            .catch(error => setError(error))
    }
    useEffect(() => {
        fetchCharacter()
    }, [])
    // debugger
    console.log(datos.data)
    return (
        <div>
           
            <CardCharacters items={datos.data} />
            

        </div>
    )
}
