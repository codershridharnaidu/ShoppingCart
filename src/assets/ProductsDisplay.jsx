import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../productSlice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { LiaRupeeSignSolid } from "react-icons/lia";

function ProductsDisplay() {
  const { items: products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Container className="my-5">
      <Row className="g-4">
        {products.map((p) => (
          <Col key={p.id} xs={12} md={3}>
            <Card className="h-100 border-0 shadow text-center">
              <Card.Img
                variant="top"
                src={p.image}
                style={{ height: "200px", objectFit: "contain" }}
                className="p-3"
              />

              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                  {p.title.length>20?`${p.title.slice(0,20)}...`:p.title}
                </Card.Title>

                <Card.Text className="fw-bold">
                  <LiaRupeeSignSolid />
                  {p.price}
                </Card.Text>

                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsDisplay;
