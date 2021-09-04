import React, { useEffect, useState } from 'react';

const IntroMessage = () => {

    //generic click event
    const [count, setCount] = useState(0);

    // person is assigned data.results[0]
    const [person, setPerson] = useState(null);

    // assigned to img from api respones?
    const [img, setImg] = useState(null);

    // loading ???
    const [loading, setLoading] = useState(true)

    // useEffect() just so that it auto refreshes on value change of count when a user click's button it updates count
    useEffect(async () => {

        // response assigned to the awaiting of fetch(calling api url)
        const response = await fetch('https://randomuser.me/api/')
            

        // data assigned the awaiting of response.json() which must be a react or javascript method that can call json()??
        const data = await response.json()

        // item must be getting assigned the data being assigned as object name? possible an array sine there is in index?
        const item = data.results[0];
        setPerson(item)
        
        setLoading(false)

    }, [count])

        

    return (
        <div>
            <p>you have clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {person && <div>{person.name.first}</div>}
            {person && <div>{person.name.last}</div>}
            {loading ? <div>...loading</div> : <img src={person.picture.large}/>}
        </div>
    )
}

export default IntroMessage