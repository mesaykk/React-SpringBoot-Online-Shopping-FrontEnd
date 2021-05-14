
import { Form, Button } from 'react-bootstrap';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {  useEffect, useState,useRef,useContext } from 'react';
import './RegisterSeller.css';
import axios from 'axios';
import {APIConfig} from '../../store/API-Config';


const RegisterSeller = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [role, setRole] = useState("SELLER");
     const[message,setMessage]=useState("");

     const APIs = useContext(APIConfig);
    const userAPI = APIs.userAPI;


    
    
  


     const userData = { firstName:firstName, lastName:lastName, email: email, password:password,role:role};

   

    const handleUserSubmit =() =>{
        console.log("hello tedy");

        axios.post(userAPI, userData)
        .then(data => {
            setMessage("You have registered with us Successfully. Thank you "+firstName+"!");
            console.log('Success:', data);
           /// props.history.push('/posts'); // push will add it to the page stack, replace will just replace the component  // props.history.replace('/posts'); 
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
    }


    return (
        <div className='RegisterSeller'>
          
            <h1> <FontAwesomeIcon icon={faUserPlus} /> Register To Sell</h1>
            <div>
                <Form class="card" onSubmit={(e)=>e.preventDefault()}  >
                    <Form.Group controlId="firstName" text-center>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Enter Your First Name"
                            value={firstName}
                            autoFocus
                            onChange={(e) => setFirstName(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="lastName" text-center>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="firstName"
                            placeholder="Enter Your Last Name"
                            value={lastName}
                            autoFocus
                            onChange={(e) => setLastName(e.target.value)} />
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

                    <Button   onClick={handleUserSubmit} type="submit" ><FontAwesomeIcon icon={faUserPlus} /> Sign UP
                        </Button>
                   
                </Form>
               
            </div>

        </div>
    )

}

export default RegisterSeller;