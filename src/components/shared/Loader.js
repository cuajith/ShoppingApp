import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
    return (
        <Spinner animation="border" role="status"
            style={{
                width: "50px",
                height: "50px",
                marginTop: "20%",
                marginLeft: "50%",
                display: "block",
            }}
        >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default Loader