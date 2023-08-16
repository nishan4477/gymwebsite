import React from 'react'
import SectionHead from './SectionHead'
import { values } from '../data'
import {  Col, Container, Row } from 'react-bootstrap'
import Image from '../images/values.jpg'
import {GiCutDiamond} from 'react-icons/gi'
import Card from '../UI/Card'
import {AiFillFire} from 'react-icons/ai'

const Values = () => {
  return (
   <section className='values my-5'>
    <Container  >
        <div className='my-5'>
    <SectionHead icon={<GiCutDiamond/>} title="Values"/>
    </div>
        <Row>
            <Col lg='5'>
                <img  src={Image} alt="" />

            </Col>

            <Col lg='7'>
               
                <p className='fs-4 mt-5 text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat impedit alias cum error fugit!</p>
                <Row className='g-5 mt-5'>
                {values.map(({id, title, desc}) => (
                    <Col lg="6">
                    <Card key={id} className="values_value"> 
                    <span><AiFillFire/></span>
                    <h4>{title}</h4>
                    <small>{desc}</small>

                  
                    </Card>
                    </Col>


                ))
                    
                }
                </Row>



            </Col>


        </Row>
    </Container>


    </section>
  )
}

export default Values