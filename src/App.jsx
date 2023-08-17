import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Gallery from  './pages/gallery/Gallery'
import Navbar from './component/Navbar'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer'
import ScrollToTop from "react-scroll-to-top";
import ScrollToTops from './component/ScrollTotops'



const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTops/>
      <ScrollToTop smooth
      color='blue' 
      
     />
       <Navbar/>
       <Routes>

        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='*' element={<NotFound/>}/>


       </Routes>

      <Footer/>
      
      
    
       </BrowserRouter>
  )
}

export default App
