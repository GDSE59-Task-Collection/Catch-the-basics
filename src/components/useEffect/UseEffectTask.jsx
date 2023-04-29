import React, { useEffect, useState } from 'react'

export const UseEffectTask = () => {
    const [value,setValue] = useState(0)
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log("Use effect 1")
    },[value])
    useEffect(()=>{
        console.log("Use effect 2")
    })

    const handleonclickvalue = ()=>{
        console.log("Render for value");
        setValue(value + 1)
    }
    const handleonclickcount = () =>{
        console.log("Render for count")
        setCount(count + 1)
    }
  return (
    <div>
        <h1>This is value: {value}</h1>
        <h1>This is count: {count}</h1>
        <div>
        <button onClick={handleonclickvalue}>Click Value</button>
        <button onClick={handleonclickcount}>Click Count</button>
        </div>
        
    </div>
  )
}
