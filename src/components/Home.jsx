import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate=useNavigate()
  return (
    <>
        <div> 
          <img src="https://cdn.pixabay.com/photo/2016/02/08/11/24/homepage-1186348_640.jpg" alt="homepage"  />
        </div>
       <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>navigate('order-successfull')}>Order</button>
    </>

  )
}
