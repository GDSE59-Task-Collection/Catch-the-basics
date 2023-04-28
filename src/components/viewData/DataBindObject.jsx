import React from 'react'

const DataBindObject = () => {
  const dataObj = [
    {
        brand:"Toyota",
        MfYear: 2020,
        model:'Axio',
        country:"Japan"
    },
      {
        brand:"Benz",
        MfYear: 2022,
        model:'AMG',
        country:"Germany"
    },
    {
        brand:"Honda",
        MfYear: 2019,
        model:'Vezel',
        country:"Japan"
    },
    {
        brand:"Toyota",
        MfYear: 2020,
        model:'CH-R',
        country:"Japan"
    },
  ]  
  return dataObj.map((data)=>(
      <div>
          <ul>
              <li>{data.model}</li>
              <li>{data.MfYear}</li>
              <li>{data.model}</li>
              <li>{data.country}</li>
          </ul>
      </div>
  ))
}

export default DataBindObject