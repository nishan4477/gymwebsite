import React from 'react'
import "./plans.scss"
import Card from '../../UI/Card'
import { plans } from '../../data'
import HeaderImage from '../../images/header_bg_4.jpg'
import Header from '../../component/Header'
import {  Col, Container, Row } from 'react-bootstrap'


const Plans = () => {
  return (
    <div><Header title='Membership Plans' image={HeaderImage}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut eum aspernatur quia laboriosam nesciunt?</Header>
    <section className='plans'>
      <Container>
        <Row className='g-5'>
          {plans.map(({id, name, desc, price, features})=>(
            <Col lg='4' sm='12' xs='12'>
            <Card key={id} className="plan mt-5">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>

              {
                features.map(({feature, available}, index)=>(
                  <p key={index}className={!available ? "disabled" : ""}>
                    {feature}
                  
                  </p>
                  
                ))
              }
             <button className='button btn btn-lg btn-primary'>Make your Plan</button>

            </Card>

            </Col>
          ))}
        </Row>

      </Container>

    </section>
    
    </div>
  )
}

export default Plans