import React from 'react'
import './home.scss'
import MainHeader from '../../component/MainHeader'
import Programs from '../../component/Programs'
import Values from '../../component/Values'
import FAQs from '../../component/FAQs'
import Testimonials from '../../component/Testimonials'
import Footer from '../../component/Footer'



const Home = () => {
  return (
 <div>
  <MainHeader />
 <Programs />
 <Values/>
 <FAQs/>
 <Testimonials/>
 <Footer/>
 </div>
  )
}

export default Home