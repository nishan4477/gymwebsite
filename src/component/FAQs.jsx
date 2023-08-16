import React from 'react'
import SectionHead from './SectionHead'
import {FaQuestion} from 'react-icons/fa'
import { faqs } from '../data'
import { Col, Container, Row } from 'react-bootstrap'
import FAQ from './FAQ'



const FAQs = () => {
  return (
<section className='faqs'>
    <Container>
        <div className="faqs__container">
            <SectionHead icon={<FaQuestion/>} title="FAQs"/>

            <Row className='g-4 mt-5'>
                {faqs.map(({id, question, answer})=>(
                    <Col lg='6' sm='12'>
                  <FAQ key={id} question={question} answer={answer}/>
                  </Col>

                ))

                }

            </Row>

             


        </div>



    </Container>


</section>
  )
}

export default FAQs