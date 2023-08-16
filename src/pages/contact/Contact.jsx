import React from 'react'
import './contact.scss'
import Header from '../../component/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'




const Contact = () => {
  return (
    <div>
      <Header title='get in Touch' image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste est sunt assumenda optio molestiae neque nam esse rerum id dolorum.
      </Header>

      <section className='contact'>
        <Container>
          <Row  className='contact__icon '>

            <Col lg='3' xs='6'>
            < a href='mailto:nishansakha@gmail.com' target='_blank'><MdEmail/></a>
            </Col>

            <Col lg='3' xs='6'>
            < a href='' target='_blank'><BsMessenger/></a>
            </Col>

            <Col lg='3'  xs='6'>
            < a href='' target='_blank'><IoLogoWhatsapp/></a>
            </Col>

            <Col lg='3' xs='6'>
            < a href='' target='_blank'><FaLinkedin/></a>
            </Col>


          </Row>
          </Container>
      </section>



    </div>
  )
}

export default Contact