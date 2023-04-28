import React from 'react'
import { UserData } from '../data/UserData'
import User from './User'

const UserDetails = () => {
  return (
    <div>
      <h1 style={{"color":"crimson"}}>User Details</h1>  
      <User name={UserData.name} address={UserData.address} age={UserData.age} designation={UserData.designation}/>
    </div>
  )
}

export default UserDetails