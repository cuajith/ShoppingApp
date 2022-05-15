import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import "./screen.css";

const ProductDetails = () => {
  const [qty, setQty] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, products, error } = productDetails;

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, []);
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h4 className="goback">
          <ArrowBackIcon />
          Go Back
        </h4>{" "}
        <br />
      </Link>
      <Row>
        <Col md={6}>
          <img
            src={products.image}
            alt={products.name}
            variant="top"
            className="single-product-image"
            style={{ height: "25rem", width: "30rem" }}
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{products.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  value={products.rating ? products.rating : ""}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              {products.numReviews} reviews
            </ListGroupItem>
            <ListGroupItem>Price: ₹ {products.price}</ListGroupItem>
            <ListGroupItem>{products.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status:</Col>
              <Col>
                {products.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </Col>
            </Row>
          </ListGroupItem>
          {products.countInStock > 0 && (
            <ListGroupItem>
              <Row>
                <Col>Qty</Col>
                <Form.Select
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(products.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Select>
              </Row>
            </ListGroupItem>
          )}
          <ListGroupItem>
            <Button
              className="btn-block"
              type="button"
              onClick={addToCartHandler}
            >
              Add to Cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
