import React, {  useEffect, useState, useRef } from 'react';
import { Link, RouteComponentProps, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Form, Button} from 'react-bootstrap';
import "./Login.css";
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios';
import UserData from "../../Data/UserData";

const Login = () => {

    //  this.state = {
    //     Login: true
    // }
    // this.changeState = this.changeState.bind(this)

    // changeState = () => {
    //     this.useState({
    //         Login: !this.state.Login
    //     })
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role , setRole] = useState("");
    const [message, setMessage] = useState("");

    const newPostForm = useRef();

    const handleSubmit =() =>{

        const form = newPostForm.current
        const data = { email: form['email'].value, password: form['password'].value };
        console.log(data);
        for(var i=0; i< UserData.length; i++){
            if(email == UserData[i].email && password == UserData[i].email){
                role = UserData[i].role;
                 return setMessage("Login Success")
            }
           
        }
        return setMessage("User Dose not Exist")
    }
    

    // const handleSubmit =(email, password) =>{
    //     axios.post("http://localhost:8080/authentication", {
    //         email,
    //         password
    //     })
    //     .then((response) => {
    //         if(response.data.accessToken) {
    //             localStorage.setItem("user", JSON.stringify(response.data))
    //         }
    //         return response.data;
    //     });
    // }
    const logout = () => {
        localStorage.removeItem("user")
    }
    const validateForm =() =>{
        return email.length > 0 && password.length > 0;
    }

    return (
        <div className='Login' >
            <h1>Login </h1>
            <div className="sucessMessage">{message} </div>

            <Form onSubmit={handleSubmit} ref={newPostForm}>
                <Form.Group controlId="email" >
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

                <Button size="lg" variant="primary" type="submit" disabled={!validateForm()} >
                    
                    <FontAwesomeIcon icon={faSignInAlt} /> Sign In
                </Button>
            </Form>

        </div>
    );
};

export default Login;