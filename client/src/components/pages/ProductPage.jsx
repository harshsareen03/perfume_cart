import React from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../../products.js";
// import { useGetProductsQuery } from "../slices/productSlice.js";
import Product from "../Product.jsx";
import { useGetProductsQuery } from "../../slices/productApiSlice.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Laoder.js";
import Message from "../Message.js";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { data: products, isLoading, error } = useGetProductsQuery();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/products/`);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default ProductPage;
