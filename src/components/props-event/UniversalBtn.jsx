import React from 'react'
import './UniversalBtn.css'
const UniversalBtn = ({msg,children}) => {
  return (
    <div>
      <button className='btn-view' onClick={()=>alert(msg)}>{children}</button>
    </div>
  )
}

export default UniversalBtn