import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Feature } from './Feature'
import { Newproduct } from './Newproduct'

export const Product = () => {
  return (
    <>
    <div><img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs.jpg" alt="" srcset="" /></div>
    <nav>
        <Link to='feature' element={<Feature/>}>feature</Link>
        <Link to='Newproduct' element={<Newproduct/>}>New Product</Link>

    </nav>
    <Outlet/>
    </>

  )
}
