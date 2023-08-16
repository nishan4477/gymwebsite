import React from 'react'
import './about.scss'
import Header from '../../component/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from  '../../images/about1.jpg'
import Missionimage from '../../images/about2.jpg'
import { Col, Container, Row } from 'react-bootstrap'





const About = () => {
  return (
    <div className='about'>
      
    <Header title='About Us' image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus saepe vel nemo deleniti. Suscipit, fugit expedita. Nulla nam eaque molestiae.

    </Header>

   <section className="about__story">
   <Container>
    <Row>

      <Col lg='6' xs="12" sm="12">
      <div className="about__section-image">
        <img  src={StoryImage} alt="Our Story Image" />
      </div>
      </Col>

      <Col lg='6' xs="12" sm="12">
        <div className="about__section-content">
          <h2 className='mb-4'>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione, esse labore, vel optio veniam tempore ullam ea illo sint aliquam explicabo assumenda dicta qui mollitia eaque voluptatum consectetur molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione, esse labore, vel optio veniam tempore ullam ea illo sint aliquam explicabo assumenda dicta qui mollitia eaque voluptatum consectetur molestiae.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, delectus!</p>
        </div>


        </Col>

      </Row>
      </Container>
  
   </section>


   <section className="about__mission">
   <Container>
    <Row>
    <Col lg='6' xs="12" sm="12">
        <div className="mission__section-content">
          <h2 className='mb-4'>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione, esse labore, vel optio veniam tempore ullam ea illo sint aliquam explicabo assumenda dicta qui mollitia eaque voluptatum consectetur molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione, esse labore, vel optio veniam tempore ullam ea illo sint aliquam explicabo assumenda dicta qui mollitia eaque voluptatum consectetur molestiae.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, delectus!</p>
        </div>


        </Col>

      <Col lg='6' xs="12" sm="12">
      <div className="mission__section-image">
        <img src={Missionimage} alt="Our Story Image" />
      </div>
      </Col>

 

      </Row>
      </Container>

   </section>


    




    </div>
  )
}

export default About