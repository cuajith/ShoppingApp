import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'

const ProductScreen = ({ product }) => {
    return (
        <>
            <Card
                className='my-3 p-3 rounded'
                style={{ height: "26rem" }}
            >
                <Link to={`/product/${product._id}`}>
                    <Card.Img
                        src={product.image}
                        variant="top"
                        style={{ height: "15rem" }}
                    />
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="div">
                        <div className='my-3'>
                            <Stack spacing={1}>
                                <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            </Stack>
                            {product.numReviews} reviews
                        </div>
                    </Card.Text>
                    <Card.Text as="div">
                        ₹ {product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductScreen