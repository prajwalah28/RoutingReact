import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductDetail() {
    const params = useParams();

  return (
   <>
     <div>ProductDetail</div>
    <p>{params.id}</p>
    <Link to=".." relative="path" >Back</Link>
   </>
  )
}
