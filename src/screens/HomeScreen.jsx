import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductScreen from './ProductScreen'
import { listProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/shared/Loader'

const HomeScreen = () => {
   const dispatch = useDispatch();
   const productList = useSelector(state => state.productList);
   const { loading, products, error } = productList
   useEffect(() =>{
     dispatch(listProducts())
  },[])
    return (
        <>
        {
            loading ? <Loader/> :
            error ? <h2> { error }</h2> :
            <Row>
            {
                products.map((product) => (
                    <Col key={product._id} md={3}>
                        <ProductScreen product={product} />
                    </Col>
                ))
            }
        </Row>
        }
        </>
    )
}

export default HomeScreen