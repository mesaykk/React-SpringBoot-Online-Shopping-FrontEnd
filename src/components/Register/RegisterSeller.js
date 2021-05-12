
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, FormEvent, useEffect, useState } from 'react';
import './Register.css';


const RegisterSeller = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [buisnessAddress, setBuisnessAddress] = useState("");
    const [typeOfProduct, setTypeOfProduct] = useState("");
    
    
    

    function validateForm() {
        return email.length > 0 && password.length > 0 & name.length > 0 && confirmPassword.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

   
        return (
            <div className='RegisterSeller'>
                <h1>Register To Sell</h1>
                <div>
                    <Form class="card" onSubmit={handleSubmit}> 
                        <Form.Group controlId="name" text-center>
                        <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="name"
                                placeholder="Enter Your Name" 
                                value={name}
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                                />
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

                        <Form.Group controlId="typeOfProduct">
                            <Form.Label> Type Of product</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter type of product" 
                                value={typeOfProduct}
                                outoFocus
                                onChange={(e) => setTypeOfProduct(e.target.value)}
                                />
                        </Form.Group>
                        <Form.Group size="lg" controlId="shippingAddress">
                            <Form.Label>Shipping Adrress</Form.Label>
                            <Form.Control
                                type="shippingAddress"
                                placeholder="Shipping Address"
                                value={buisnessAddress}
                                autoFocus
                                onChange={(e) => setBuisnessAddress(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit"><FontAwesomeIcon icon={faUserPlus} /> Sign UP
                        </Button>
                    </Form>
                </div>

            </div>
        )
    
}

export default RegisterSeller;