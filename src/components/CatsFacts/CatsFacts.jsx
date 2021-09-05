import React, {useEffect, useState} from 'react';

const CatsFacts = () => {
    const [item, setItem] = useState(null)
    const [loading, setIsLoading] = useState(true)

    useEffect(async () => {
        const response = await fetch('https://cat-fact.herokuapp.com')
        const data = await response
        const item = data.body
        setItem(item)
        setIsLoading(false)
        console.log(item)
    }, []) 
    return(
        <div>
            {loading ? "...loading" : item.object}
        </div>
    )
}

export default CatsFacts;