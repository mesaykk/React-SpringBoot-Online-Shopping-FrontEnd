
import React, { FC, FormEvent, useEffect, useState } from 'react';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Register.css';


const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    
    

    function validateForm() {
        return email.length > 0 && password.length > 0 & name.length > 0 && confirmPassword.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
 
    return (
        <div className='Register'>
            <h1> Register </h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" text-center>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="name"
                        placeholder="Enter Your Name" 
                        value={name}
                        autoFocus
                        onChange={(e) => setName(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="email" text-center>
                    <Form.Label >Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        autoFocus
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        autoFocus
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>

                <Form.Group size="lg" controlId="shippingAddress">
                    <Form.Label>Shipping Adrress</Form.Label>
                    <Form.Control
                        type="shippingAddress"
                        placeholder="Shipping Address"
                        value={shippingAddress}
                        autoFocus
                        onChange={(e) => setShippingAddress(e.target.value)} />
                </Form.Group>

                <Form.Group size="lg" controlId="billingAddress">
                    <Form.Label>Shipping Adrress</Form.Label>
                    <Form.Control
                        type="billingAddress"
                        placeholder="billing Address"
                        value={billingAddress}
                        autoFocus
                        onChange={(e) => setBillingAddress(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit"><FontAwesomeIcon icon={faUserPlus} /> Sign UP
                </Button>

            </Form>
        </div>
    )


        

    
}

export default Register;