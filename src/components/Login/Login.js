import React, { FC, FormEvent, useEffect, useState } from 'react';
import { Link, RouteComponentProps, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Row, Col } from 'react-bootstrap';


import "./Login.css";
import Manager from '../Manager/Manager';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className='Login' >
            <h1>Login</h1>

            <Form onSubmit={handleSubmit}>
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
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button size="lg" variant="primary" type="submit" disabled={!validateForm()}><FontAwesomeIcon icon={faSignInAlt} /> Sign In
                </Button>
            </Form>


        </div>
    );
};

export default Login;