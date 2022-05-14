import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button, Card, Image, ListGroup} from 'react-bootstrap'
import { addToCart } from '../actions/cartAction'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const productId = id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  },[])

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;
  console.log(cart)
  return (
    <div></div>
  )
}

export default CartScreen