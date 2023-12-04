import React from "react";
import { Card, Button } from "react-bootstrap";

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
      </Card>
    </>
  );
};

export default Product;
