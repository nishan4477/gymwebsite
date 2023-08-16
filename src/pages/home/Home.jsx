import React from 'react'
import './home.scss'
import MainHeader from '../../component/MainHeader'
import Programs from '../../component/Programs'
import Values from '../../component/Values'
import FAQs from '../../component/FAQs'
import Testimonials from '../../component/Testimonials'
import Footer from '../../component/Footer'
import ScrollToTop from "react-scroll-to-top";



const Home = () => {
  return (
 <div>
  <MainHeader />
 <Programs />
 <Values/>
 <FAQs/>
 <Testimonials/>

 </div>
  )
}

export default Home