import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Contactus } from './components/Contactus'
import { Ordersummary } from './components/Ordersummary'
import { Nopage } from './components/Nopage'
import { Product } from './components/Product'
import { Feature } from './components/Feature'
import { Newproduct } from './components/Newproduct'
import { Footer } from './components/Footer'


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact-us' element={<Contactus/>}></Route>
      <Route path='/order-successfull' element={<Ordersummary/>}></Route>
      <Route path='/product' element={<Product/>}>
        <Route index element={<Feature/>}></Route>
        <Route path='feature' element={<Feature/>}></Route>
        <Route path='Newproduct' element={<Newproduct/>}></Route>
      </Route>
      <Route path='*' element={<Nopage/>}></Route>
    </Routes>
    <Footer/>
   
    </>
  )
}

export default App
