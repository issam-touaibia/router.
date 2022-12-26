import React from 'react'
import { useParams } from 'react-router-dom'
const Descriptions = ({movie}) => {
const params= useParams()
console.log(params)
const Mov=movie.find(el=>el.id===+params.id)

  return (
    <div>
      <h1> test </h1>
   

    </div>
  )
}

export default Descriptions
