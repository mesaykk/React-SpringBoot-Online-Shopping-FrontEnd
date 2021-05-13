
import React, {useState } from 'react';

import { Form, Button } from 'react-bootstrap';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Register.css';
import axios from 'axios';


const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    
    

    const validateForm = () => {
        return email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0  
        && confirmPassword.length > 0 && shippingAddress.length > 0 && billingAddress.length > 0;
    }

    const handleSubmit =(firstName, lastName,email, password, confirmPassword, shippingAddress, billingAddress) =>{
        axios.post("http://localhost:8080/authentication", {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            shippingAddress,
            billingAddress
        })
    }
 
    return (
        <div className='Register'>
            <h1> <FontAwesomeIcon icon={faUserPlus} />  Register </h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName" text-center>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="name"
                        placeholder="Enter Your First Name" 
                        value={firstName}
                        autoFocus
                        onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="lastName" text-center>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="firstName"
                        placeholder="Enter Your Last Name" 
                        value={lastName}
                        autoFocus
                        onChange={(e) => setLastName(e.target.value)}/>
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

                <Button variant="primary" type="submit" disabled={!validateForm()}><FontAwesomeIcon icon={faUserPlus} /> Sign UP
                </Button>

            </Form>
        </div>
    )


        

    
}

export default Register;