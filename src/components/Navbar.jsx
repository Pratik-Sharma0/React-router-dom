import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
   <nav className='primary-nav'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/product'>Product</NavLink>
    <NavLink to='/contact-us'>Contact</NavLink>
   </nav>
  )
}
