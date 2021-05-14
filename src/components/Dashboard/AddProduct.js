import React, { FC, FormEvent, useEffect, useState,useContext } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route, Switch } from 'react-router-dom';
import '../Dashboard/Dashboard.css'
import axios from 'axios';
import {APIConfig} from '../../store/API-Config';

const AddProduct = () => {

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [itemSize, setItemSize] = useState("");
    const [image, setImage] = useState("");
    

    const[message,setMessage]=useState("");

    const APIs = useContext(APIConfig);
   const productAPI = APIs. productAPI;
   
 


    const productData = { productName:productName, description:description, category: category, unitPrice:unitPrice, itemSize:itemSize, image:image};

  

    const handleProductSubmit = (event) => {
        event.preventDefault();
        console.log("hello tedy");

        axios.post(productAPI, productData)
        .then(data => {
            setMessage("You have added your product Successfully. Thank you!");
            console.log('Success:', data);
           /// props.history.push('/posts'); // push will add it to the page stack, replace will just replace the component  // props.history.replace('/posts'); 
        })
        .catch((error) => {
            setMessage("The category you selected is not created yet. You must first add ProductCategory!");
            console.error('Error:', error);
        });
    }

    return (
        <div className='AddProduct'>
            <h4>  Please Add Your Product</h4>

            <Form class="card" onSubmit={(e)=>e.preventDefault()}>
                
                <Form.Group controlId="productName" text-center>

                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter Product Name"
                        value={productName}
                        autoFocus
                        onChange={(e) => setProductName(e.target.value)} />

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

                <Form.Group controlId="category" text-center>

                    <Form.Label>Add Category</Form.Label>
                    <Form.Control as="select" type="text" placeholder="Add Category" value={category}
                        autoFocus onChange={(e) => setCategory(e.target.value)}
                    >
                        <option>Electronics</option>
                        <option>Books</option>
                        <option>Furnitures</option>
                        <option>Clothes</option>
                        <option>Foods</option>
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId="price" text-center>
                    <Form.Label>Unit Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Unit Price"
                        value={unitPrice}
                        autoFocus
                        onChange={(e) => setUnitPrice(e.target.value)}
                    />
                </Form.Group>


                <Form.Group controlId="itemSize" text-center>

                    <Form.Label>Add Item Size</Form.Label>
                    <Form.Control as="select" type="text" placeholder="Add Item Size" value={itemSize}
                        autoFocus onChange={(e) => setItemSize(e.target.value)}
                    >
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </Form.Control>

                </Form.Group>




                <Form>
                    <Form.File
                        id="custom-file"
                        label="Add Image"
                        custom
                    />
                </Form>

                <div className="successMessage">{message}</div>

                <Button variant="primary" onClick={handleProductSubmit} type="submit"><FontAwesomeIcon icon={faPlus} />  Add Product
                </Button>
            </Form>
        </div>
    )
}

export default AddProduct;