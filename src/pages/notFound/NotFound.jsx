import React from 'react'
import "./notFound.scss"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
  <section>
    <Container>
       <div className="notfound__container text-center">
        <h2>Page Not Found.</h2>
        <Link to='/' className='btn btn-lg btn-primary '>Go to Home</Link>

       </div>

    </Container>
  </section>
  )
}

export default NotFound