import React, { useEffect, useState } from 'react';

const NotherUser = () => {
    const [waiting, setWaiting] = useState(true)
    
    const [pic, setPic] = useState(null)

    useEffect(async () => {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        
        const item = data.results[0]
        
        console.log(item)

        
        setPic(item.picture.large)
        setWaiting(false)
        
    }, []) 

    return (
        <div>
            {waiting ? "...waiting" : <img src={pic}/>}
            
        </div>
    )
}

export default NotherUser