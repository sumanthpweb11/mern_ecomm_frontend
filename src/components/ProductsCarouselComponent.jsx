import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";

const ProductsCarouselComponent = () => {
  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel className="test">
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          src="/images/carousel/1.jpg"
          alt="First slide"
          style={{ height: 400, objectFit: "cover" }}
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller</h3>
          </LinkContainer>

          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          src="/images/carousel/2.jpg"
          alt="Second slide"
          style={{ height: 400, objectFit: "cover" }}
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller 2</h3>
          </LinkContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          src="/images/carousel/3.jpg"
          alt="Third slide"
          style={{ height: 400, objectFit: "cover" }}
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller 3</h3>
          </LinkContainer>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductsCarouselComponent;
