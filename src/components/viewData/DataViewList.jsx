import React from 'react'
import { Data } from '../data/Data'

const DataViewList = () => {
const toList = Data.map(details => <li>{details}</li>)
  return (
    <ul>{toList}</ul>
  )
}

export default DataViewList