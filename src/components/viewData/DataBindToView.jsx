import React from 'react'

export const DataBindToView = () => {
  const data = ["Benz","BMW","Toyota","Mazda","Suzuki"]
  return data.map((details)=>(
    <div>
      <ul>
        <li>{details}</li>
      </ul>
    </div>
  ))
    
}
