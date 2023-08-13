import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Gallery from  './pages/gallery/Gallery'
import Navbar from './component/Navbar'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Gallery/>
      <NotFound/>
      <Plans/>
      <Trainers/>
      
      
    
    </div>
  )
}

export default App
