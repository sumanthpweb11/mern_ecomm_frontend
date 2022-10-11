import React from "react";
import CategoryCardComponent from "../components/CategoryCardComponent";
import ProductsCarouselComponent from "../components/ProductsCarouselComponent";
import { Row, Container } from "react-bootstrap";

const HomePage = () => {
  const categories = ["tablets", "games", "tshirts", "books", "food"];
  return (
    <>
      <ProductsCarouselComponent />

      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, index) => {
            return (
              <CategoryCardComponent
                key={index}
                category={category}
                index={index}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
