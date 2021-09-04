import React, { useState, useEffect } from 'react'


const RandomJoke = () => {


    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)


    useEffect(async () => {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json()
        const item = data.results[0]
        setItem(item)

        setLoading(false)
    }, [])


    return (
        <div>
            {loading ? <div>...loading</div> : <div>{item.stringify}</div>}
        </div>
    )
}

export default RandomJoke
