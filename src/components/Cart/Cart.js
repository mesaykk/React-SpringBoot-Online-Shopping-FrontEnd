import { Container, Navbar, Col, Card } from 'react-bootstrap';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMinus, faPlus, faShoppingCart, faSignInAlt, faSignOutAlt, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";


const Cart = () => {


    return (
        <div className="Cart">
            <Card style={{ width: '60rem' }}>
                <Card.Body>

                    <Card.Title>product name</Card.Title>
                    <Card.Img variant="top" src="" />
                    <Card.Subtitle className="mb-2 text-muted">Product Details</Card.Subtitle>
                    <Card.Text>
                        product 1
                    </Card.Text>
                    <Card.Link href="#" style={{ float: 'left' }}> Remove</Card.Link>
                    <Card.Link href="#"style={{ float: 'left' }}>Add</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '60rem' }}>
                <Card.Body>

                    <Card.Title>product name</Card.Title>
                    <Card.Img variant="top" src="" />
                    <Card.Subtitle className="mb-2 text-muted">Product Details</Card.Subtitle>
                    <Card.Text>
                        product 2
                    </Card.Text>
                    <Card.Link href="#"><FontAwesomeIcon icon={faPlus}/> Add</Card.Link>
                    <Card.Link href="#"><FontAwesomeIcon icon={faMinus}/> Remove</Card.Link>
                    
                </Card.Body>
            </Card>
        </div>
    )
}
export default Cart;