import React, { FC, FormEvent, useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route, Switch } from 'react-router-dom';
import './Dashboard.css'

const AddProduct = () => {

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [image, setImage] = useState("");
    const [itemSize, setItemSize] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='AddProduct'>
            <h1> <FontAwesomeIcon icon={faPlus} /> Please Add Your Product</h1>

            <Form class="card" onSubmit={handleSubmit}>
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
                    <Form.Control
                        type="text"
                        placeholder="Add Item Size"
                        value={itemSize}
                        autoFocus
                        onChange={(e) => setItemSize(e.target.value)}
                    />
                </Form.Group>

                <Form>
                    <Form.File
                        id="custom-file"
                        label="Add Image"
                        custom
                    />
                </Form>

                <Button variant="primary" type="submit"><FontAwesomeIcon icon={faPlus} />  Add Product
                </Button>
            </Form>
        </div>
    )
}

export default AddProduct;