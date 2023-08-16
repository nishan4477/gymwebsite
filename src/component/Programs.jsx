import React from 'react'
import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import { programs } from '../data'
import Button from 'react-bootstrap/Button';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import {AiFillFire} from 'react-icons/ai'



const Programs = () => {
   
  return (
    <section className="programs">
        <Container>
   <div className="container programs__container">
    <SectionHead icon={<FaCrown/>} title="Programs"/>
  
   <Row className='mt-2 g-5'>
      {programs.map(({id, icon, title,info, path})=> (
        <Col  sm='6' lg="3">
        <Card className='programs__program shadow-lg' key={id}>
          <span><AiFillFire/></span>
          <h4>{title}</h4>
          <small>{info}</small><br/>
          <Link to={path}><Button className='mt-3' size='sm' variant='primary' >ReadMore</Button> </Link> 




        </Card>
        </Col>
      ))
      }
</Row>
   </div>
   </Container>
    </section>
  )
}

export default Programs