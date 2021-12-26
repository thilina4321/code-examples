import { useEffect, useState } from "react"

const Data = () => {
    const [state, setstate] = useState()
    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        const d = await fetch('http://localhost:8002/rates-and-charges/foreignRates')
        const e = await d.json()
        console.log(e);
    }
    return (
        <div>
            Hello
        </div>
    )
}

export default Data
