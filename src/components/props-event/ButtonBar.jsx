import React from 'react'
import UniversalBtn from './UniversalBtn'
import './UniversalBtn.css'
const ButtonBar = () => {
  return (
    <div className='btn-stack'>
        <UniversalBtn msg="Saved Documant">
            Save
        </UniversalBtn>
        <UniversalBtn msg="Open Documant">
            Open
        </UniversalBtn>
        <UniversalBtn msg="Delete Documant">
            Delete
        </UniversalBtn>
        <UniversalBtn msg="Close Documant">
            Close
        </UniversalBtn>
    </div>
  )
}

export default ButtonBar