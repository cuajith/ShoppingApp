import React, { useState } from "react";
import CheckoutStep from "../components/shared/CheckoutStep";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePayment } from "../actions/cartAction";
import { useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const [message, setMessage] = useState("paypal");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePayment(message));
    navigate('/placeorder')
  }
  return (
    <>
      <CheckoutStep step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label as="legend">Select Payment Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal or credit card"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              onChange={(e) => setMessage(e.target.value)}
             ></Form.Check>
           </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default PaymentScreen;
