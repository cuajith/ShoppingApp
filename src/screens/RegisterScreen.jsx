import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/shared/Loader";
import Message from '../components/shared/Message';
import { register } from "../actions/userAction";
import FormContainer from "../components/shared/FormContainer";

const RegisterScreen = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
 
  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  // useEffect(() => {
  //     if(userInfo) {
  //       navigate('/')
  //     }
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if( password != confirmPassword ) {
        alert("Password and confirmPasword must be same");
    } else {
        dispatch(register(name,email, password))
    }
    navigate('/')
  }

  return (
    <>
      <FormContainer>
          { error && <Message variant="danger">{error}</Message>}
          { loading && <Loader/>}
          { message && <Message variant="danger">{message}</Message> }
        
        <h1>REGISTER</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">SIGN IN</Button>
        </Form>
        <Row>
            <Col>
              Already have an account? <Link to="/signin">Login</Link>
            </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default RegisterScreen;
