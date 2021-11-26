import React, { useEffect, useState } from 'react'
import CardEpisode from '../components/CardEpisode'



export default function Episode() {
    const [datos, setDatos] = useState({
        data: []
    })
    const [hasError, setError] = useState(false)
    const fetchCharacter = async () => {
        const response = await fetch('https://api.aniapi.com/v1/random/anime/1000')
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
           
            <CardEpisode items={datos.data} />
            

        </div>
    )
}