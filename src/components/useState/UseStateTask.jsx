import React, { useState } from 'react'
import './UseStateTask.css'

const UseStateTask = () => {
  const [value,setValue] = useState(0)
  
  const handleonclickplus = () =>{
    setValue(value + 1)
  }

  const handleonclickmin = () =>{
    setValue(value - 1)
  }

  return (
    <div>
        <h1>The value is: {value}</h1>
        <div>
          <button className='btn' onClick={handleonclickplus}>Plus</button>
          <button className='btn' onClick={handleonclickmin}>Min</button>
        </div>
    </div>
  )
}

export default UseStateTask