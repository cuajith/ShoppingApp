import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/shared/Loader";
import Message from '../components/shared/Message';
import { login } from "../actions/userAction";
import FormContainer from "../components/shared/FormContainer";

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
 
  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split("=")[1] : "/";

//   useEffect(() => {
//       if(userInfo) {
//         navigate(redirect)
//       }
//   },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    navigate(redirect)
    }

  return (
    <>
      <FormContainer>
          { error && <Message variant="danger">{error}</Message>}
          { loading && <Loader/>}
        
        <h1>SIGN IN</h1>
        <Form onSubmit={handleSubmit}>
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
          <Button type="submit" variant="primary">SIGN IN</Button>
        </Form>
        <Row>
            <Col>
              New User? <Link to={redirect ? `register?redirect=${redirect}`: '/register'}>Register</Link>
            </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
