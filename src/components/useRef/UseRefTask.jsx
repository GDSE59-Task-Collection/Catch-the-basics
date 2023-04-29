import React, { useEffect, useRef, useState } from 'react'

export const UseRefTask = ()=>{
    const [currentvalue,setCurrentValue]  =useState(0)
    const prevValue = useRef();
    useEffect(()=>{
       prevValue.current = currentvalue
    })
    const prevValueToUI = prevValue.current
      return(
          <div>
            <div>
                <h1>This is the current Value: {currentvalue}</h1>
                <h1>This is the prev Value: {prevValueToUI}</h1>
            </div>
            <div>
                <button onClick={()=>setCurrentValue(currentvalue + 1)}>Add</button>
            </div>
          </div>
      );
}