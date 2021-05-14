<<<<<<< HEAD
import React, {  useEffect, useState,useContext } from 'react';
=======
import React, {  useEffect, useState, useRef } from 'react';
>>>>>>> dfb8854a90cf49f9ad21fb27475543255a4a9d8a
import { Link, RouteComponentProps, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Form, Button} from 'react-bootstrap';
import "./Login.css";
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios';
<<<<<<< HEAD
import {APIConfig} from '../../store/API-Config';
=======
import UserData from "../../Data/UserData";
>>>>>>> dfb8854a90cf49f9ad21fb27475543255a4a9d8a

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

    const [userCall, setUserCall] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
<<<<<<< HEAD
    const[isUser,setIsUser]=useState(false);
    const[message,setMessage]=useState("");


    const APIs = useContext(APIConfig);
    const userAPI = APIs. userAPI;

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
    
    

    const handleSubmit =(event) =>{

        event.preventDefault();
        console.log("hello tedy");
        
        axios(userAPI+"/byEmail/"+email,{headers})
        .then(response => {
            setUserCall(response.data);
            setMessage("You have loged in Successfully. Thank you!");
            console.log('Success:', response.data);
            setIsUser(true);
            console.log(isUser);

           /// props.history.push('/posts'); // push will add it to the page stack, replace will just replace the component  // props.history.replace('/posts'); 
        })
        .catch((error) => {
            setMessage("User email or password error. You may need to register! Please signUp!");
            console.error('Error:', error);
        });
        // axios.post("http://localhost:8080/authentication", {
        //     email,
        //     password
        // })
        // .then((response) => {
        //     if(response.data.accessToken) {
        //         localStorage.setItem("user", JSON.stringify(response.data))
        //     }
        //     return response.data;
        // });
=======
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
>>>>>>> dfb8854a90cf49f9ad21fb27475543255a4a9d8a
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

<<<<<<< HEAD
                <div className="successMessage">{message}</div>

                <Button size="lg" variant="primary" type="submit" disabled={!validateForm()}>
=======
                <Button size="lg" variant="primary" type="submit" disabled={!validateForm()} >
>>>>>>> dfb8854a90cf49f9ad21fb27475543255a4a9d8a
                    
                    <FontAwesomeIcon icon={faSignInAlt} /> Sign In
                </Button>
            </Form>

        </div>
    );
};

export default Login;