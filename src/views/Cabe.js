import React, { useEffect, useState } from 'react'
import Cabezera from '../components/Cabezera'

export default function Cabe() {
   
    const [datos, setDatos] = useState({
        data: []
    })
    const [hasError, setError] = useState(false)
    const fetchCabe = async () => {
        const response = await fetch('https://api.aniapi.com/v1/random/anime/1')
        response
            .json()
            .then(response => setDatos(response))
            .catch(error => setError(error))
    }
    useEffect(() => {
        fetchCabe()
    })
    
   
    // debugger
    console.log(datos.data)
    return (
        <div>
            <Cabezera items={datos.data} />
        </div>
    )
    setInterval(Cabe(),3000)
}
