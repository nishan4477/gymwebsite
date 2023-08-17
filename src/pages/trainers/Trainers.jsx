import React from 'react'
import './trainers.scss'
import Header from '../../component/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Trainer from '../../component/Trainer'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { trainers } from '../../data'

import { BsInstagram } from 'react-icons/bs'








const Trainers = () => {
  return (<div>
<Header title="Trainers" image={HeaderImage}>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laborum saepe dicta aliquam voluptatibus velit!
</Header>
<section className='trainers mt-5'>
  <Container>
    <Row className='g-5'>
   {trainers.map(({id, image, name, job, socials})=>(
    <Col lg='6' sm='12' xs='12'  >
 <Trainer key={id} image={image} name={name} job={job} socials={
[
  {icon: <BsInstagram/> , link: socials[0] },
  {icon: <AiOutlineTwitter/> , link: socials[1] },
  {icon: <FaFacebook/> , link: socials[2] },
  {icon: <FaLinkedin/> , link: socials[3] },
]

   


 }/>
 </Col>
   ))
    
   }
 

    </Row>
  </Container>


</section>
</div>
  )
}

export default Trainers