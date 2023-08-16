import React, { useState, useEffect } from 'react';
import "./gallery.scss";
import Header from '../../component/Header';
import Galleryimage from '../../images/header_bg_3.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const Gallery = () => {
  const galleryLength = 15;
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const imageImports = [];
      for (let i = 1; i <= galleryLength; i++) {
        imageImports.push(import(`../../images/gallery${i}.jpg`));
      }
      const resolvedImages = await Promise.all(imageImports);
      setImages(resolvedImages);
    }
    fetchImages();
  }, []);

  return (
    <div>
      <Header title="gallery" image={Galleryimage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nobis ipsum aliquam facilis quia dicta ullam accusantium eveniet sequi tempora?
      </Header>

      <section className='gallery mt-5'>
        <Container>
          <Row className='g-4'>
            {images.map((image, index) => (
              <Col lg='6'>
              <article key={index}>
                <img className='border rounded' src={image.default} alt="" />
              </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Gallery;
