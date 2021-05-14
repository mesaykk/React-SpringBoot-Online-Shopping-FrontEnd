import React, { FC, FormEvent, useEffect, useState, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route, Switch } from 'react-router-dom';
import '../Dashboard/Dashboard.css'
import axios from 'axios';
import {APIConfig} from '../../store/API-Config';



const AddProductCategory =()=>{


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
   
    

    const [message, setMessage] = useState("");

    const APIs = useContext(APIConfig);
    const productCategoryAPI = APIs. productCategoryAPI;




    const productCategoryData = { name: name, description: description };



    const handleProductCategorySubmit = () => {
       
        console.log("hello tedy");

        axios.post(productCategoryAPI, productCategoryData)
            .then(data => {
                setMessage("You have added a product-Category Successfully. Thank you!");
                console.log('Success:', data);
                /// props.history.push('/posts'); // push will add it to the page stack, replace will just replace the component  // props.history.replace('/posts'); 
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='AddProduct'>
            <h4>  Please Add Your Product</h4>

            <Form class="card" onSubmit={(e) => e.preventDefault()}>
                <Form.Group controlId="category" text-center>

                    <Form.Label>Add Category name</Form.Label>
                    <Form.Control as="select" type="text" placeholder="Add Category Name" value={name}
                        autoFocus onChange={(e) => setName(e.target.value)}
                    >
                        <option>Electronics</option>
                        <option>Books</option>
                        <option>Furnitures</option>
                        <option>Clothes</option>
                        <option>Foods</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="description" text-center>

                    <Form.Label>Add Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add Description"
                        value={description}
                        autoFocus
                        onChange={(e) => setDescription(e.target.value)}
                    />

                </Form.Group>

                <div className="successMessage">{message}</div>

                <Button variant="primary" onClick={handleProductCategorySubmit} type="submit"><FontAwesomeIcon icon={faPlus} />  Add ProductCategory
                </Button>
            </Form>
        </div>
    )

}

export default AddProductCategory;
