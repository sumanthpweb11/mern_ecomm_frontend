import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForListComponent = () => {
  return (
    <Card
      style={{
        marginTop: "30px",
        marginBottom: "50px",
      }}
    >
      <Row>
        <Col lg={5}>
          <Card.Img
            crossOrigin="anonymous"
            variant="top"
            src="/images/carousel/2.jpg"
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <Card.Text>
              <Rating readonly initialValue={5} size={20} />
              (1)
            </Card.Text>

            <Card.Text className="h4">
              $124
              <LinkContainer to="/product-details">
                <Button variant="danger">See Product</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
