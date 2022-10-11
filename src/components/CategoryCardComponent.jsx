import React from "react";
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = ({ category, index }) => {
  const images = [
    "/images/carousel/1.jpg",
    "/images/carousel/2.jpg",
    "/images/carousel/3.jpg",
    "/images/carousel/1.jpg",
    "/images/carousel/2.jpg",
  ];
  return (
    <Card>
      <Card.Img crossOrigin="anonymous" variant="top" src={images[index]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go To Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
