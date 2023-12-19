import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Ratings";

const Product = ({ product }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.img} />
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </a>

          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
      </Card>
    </>
  );
};

export default Product;
