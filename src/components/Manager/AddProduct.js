import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route, Switch } from 'react-router-dom';


const AddProduct = () => {
    return (
        <div className='AddProduct'>
            <Form>
                <Form.Group controlId="formBasicName">

                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Product Name" />

                </Form.Group>

                <Form.Group controlId="formBasicDescription">

                    <Form.Label>Add Description</Form.Label>
                    <Form.Control type="text" placeholder="Add Description" />

                </Form.Group>

                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group controlId="formBasicSize">
                    <Form.Label>Add Size</Form.Label>
                    <Form.Control type="text" placeholder="add Size" />
                </Form.Group>

                <Form>
                    <Form.File
                        id="custom-file"
                        label="Custom file input"
                        custom
                    />
                </Form>

                <Button variant="primary" type="submit"><FontAwesomeIcon icon={faPlus} />
                   Add Product
                </Button>
            </Form>
        </div>
    )
}

export default AddProduct;