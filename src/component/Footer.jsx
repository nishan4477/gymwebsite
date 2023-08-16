import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import Contact from '../pages/contact/Contact'
import { Col, Container, Row } from 'react-bootstrap'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col lg="6" sm="12">
                <Link to='/' className='logo'>
                    <img width='' src={Logo} alt="" />
                </Link>

                <p className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, accusamus.</p>

               <Row className='social__logo'>
                <Col><a href='https://www.facebook.com/nishan.sakha/' target='_blank'>{<FaFacebook/>}   </a></Col>
                <Col><a href='https://www.linkedin.com/in/nishan-sakha-3888b1183/' target='_blank'>{<FaLinkedin/>}</a></Col>
                <Col><a href='https://www.instagram.com/nishanee77/?hl=en' target='_blank'>{<AiFillInstagram/>}</a></Col>
                <Col><a href='https://twitter.com/?lang=en' target='_blank'>{<AiOutlineTwitter/>}</a></Col>
               </Row>

                </Col>

                <Col lg="2" sm="12">
                    <h4>Permalinks</h4>
                    <ul> 
                    <li>  <Link to="/about">About</Link></li>
                    <li> <Link to="/plans">Plans</Link></li>
                    <li> <Link to="/trainers">Trainers</Link></li>
                    <li>  <Link to="/gallery">Gallery</Link></li>
                    <li>  <Link to="/contact">Contact</Link></li>
                    </ul>
                    
                </Col>

                <Col lg="2" sm="12">

                <h4>Permalinks</h4>
                    <ul> 
                    <li>  <Link to="/about">About</Link></li>
                    <li> <Link to="/plans">Plans</Link></li>
                    <li> <Link to="/trainers">Trainers</Link></li>
                    <li>  <Link to="/gallery">Gallery</Link></li>
                    <li>  <Link to="/contact">Contact</Link></li>
                    </ul>
                </Col>


                <Col lg="2" sm="12">
                <h4>Permalinks</h4>
                    <ul> 
                    <li>  <Link to="/about">About</Link></li>
                    <li> <Link to="/plans">Plans</Link></li>
                    <li> <Link to="/trainers">Trainers</Link></li>
                    <li>  <Link to="/gallery">Gallery</Link></li>
                    <li>  <Link to="/contact">Contact</Link></li>
                    </ul>
                    
                </Col>





            </Row>
            <Row>
                <div>
                <hr />
                    <p className='text-center text-light '>nishansakha@copyright2023</p>
                </div>
            </Row>
        </Container>



    </footer>
  )
}

export default Footer