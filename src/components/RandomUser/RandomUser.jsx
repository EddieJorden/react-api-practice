import React, { useEffect, useState } from "react";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)



    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json()
        const [item] = data.results;
        setData(item);
        setLoading(false)
    }, []);

    return {data, loading};
}

export default () => {
    const [count, setCount] = useState(0);
    const {data, loading} = useFetch("https://randomuser.me/api/")
    

    return (
        <div>
            <p>You clicked {count}</p>
            {loading ? <div>...loading</div> : <div>{data.name.title}</div>}
            {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
            {loading ? <div>...loading</div> : <div>{data.name.last}</div>}
            {loading ? <div>...loading</div> : <img src={data.picture.large}/>}
            {loading ? <div>...loading</div> : <div>username: {data.login.username}</div>}
            {loading ? <div>...loading</div> : <div>password: {data.login.password}</div>}

            <button onClick={() => setCount(count + 1)}></button>
        </div>
    )
}



