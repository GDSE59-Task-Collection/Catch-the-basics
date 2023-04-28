import React from 'react'

const User = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>{props.address}</h2>
        <h2>{props.age}</h2>
        <h2>{props.designation}</h2>    
    </div>
  )
}

export default User