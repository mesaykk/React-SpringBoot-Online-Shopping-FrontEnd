
import React, {useState,useContext } from 'react';

import { Form, Button } from 'react-bootstrap';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Register.css';
import './RegisterSeller.css';
import axios from 'axios';
import {APIConfig} from '../../store/API-Config';


const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [role, setRole] = useState("BUYER");
     const[message,setMessage]=useState("");

     const APIs = useContext(APIConfig);
    const userAPI = APIs.userAPI;
    
  


     const userData = { firstName:firstName, lastName:lastName, email: email, password:password,role:role};

   
    

   

    const handleUserSubmit =() =>{
        

        axios.post(userAPI, userData)
        .then(data => {
            setMessage("You have registered with us Successfully. Thank you "+firstName+"!");
            console.log('Success:', data);
       
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
    }
 
    return (
        <div className='Register'>
            <h1> <FontAwesomeIcon icon={faUserPlus} />  Register </h1>
            <Form onSubmit={(e)=>{e.preventDefault()}}>
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

                <div className="successMessage">{message}</div>
            

                <Button type="submit"  onClick={handleUserSubmit}><FontAwesomeIcon icon={faUserPlus} /> Sign UP
                </Button>

            </Form>
        </div>
    )


        

    
}

export default Register;