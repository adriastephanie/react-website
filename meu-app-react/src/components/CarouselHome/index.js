import React from 'react';
import { Carousel } from 'react-bootstrap';
import b1 from '../../assets/b1.jpg';
import b2 from '../../assets/b2.jpg';
import b3 from '../../assets/b3.jpg';

export default function CarouselHome () {
    return(
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={b1}
      alt="First slide" 
      max-width= '10px'
    />
    <Carousel.Caption>
      <h3>Slide 1</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={b2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Slide 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={b3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Slie 3</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    );
}