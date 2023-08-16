import React from 'react'

import SectionHead from './SectionHead'
import Card from '../UI/Card'
import { testimonials } from '../data'
import { Col, Container, Row } from 'react-bootstrap'
import {ImQuotesLeft} from 'react-icons/im';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Testimonials = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
  <section className='testimonials'>
    <Container className='mt-5 '>
        <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" />
        <Row className='gap-3 mt-5'>
        <Carousel responsive={responsive}
         autoPlay={true}
         autoPlaySpeed={4000}
         infinite={true}
        >
            {testimonials.map(({id, name, quote, job, avatar})=>(
                <Col>
                <Card key={id} className="testimonial">
                    <div className='testimonial__avatar'>
                        <img src={avatar} alt="" />
                    </div>
                    <p className='text-light mt-3'>{`"${quote}"`}</p>
                    <h4>{name}</h4>
                    <small>{job}</small>
                </Card>
                
                
                
                </Col>
            ))


            }


</Carousel>;







        </Row>









    </Container>
  </section>
  )
}

export default Testimonials