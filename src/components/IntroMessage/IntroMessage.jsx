import React, { useEffect, useState } from 'react';

const IntroMessage = () => {
    const url = 'https://randomuser.me/api/'
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState(null);


    useEffect(async() => {
        const response = await fetch(url)
        const data = await response.json()
        const item = data.results[0]
        setPerson(item)
    }, [count])

    return (
        <div>
            <p>you have clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {person && <div>{person.name.first}</div>}
        </div>
    )
}

export default IntroMessage