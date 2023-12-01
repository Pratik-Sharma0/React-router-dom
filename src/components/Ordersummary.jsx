import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Ordersummary = () => {
    const navigate=useNavigate()
  return (
    <>
      <div>Order Successfull</div>
    <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>navigate(-1)}>Go back</button>
    </>
  
  )
}
