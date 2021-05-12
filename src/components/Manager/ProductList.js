import React from 'react';
import {Table} from 'react-bootstrap';



const ProductList = (props) => {

    let date = new Date().getFullYear;

    return (
        <div className='Order' >
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Date</th>
                        <th>Customer </th>
                        <th>Quantity</th>
                        <th>Address</th>
                        <th>Product Code</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>12/12/12</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>123 avanu</td>
                        <td>3333</td>
                        <td>$7750</td>
                    </tr>
                    
                    
                </tbody>
            </Table>


        </div>
    )
}

export default ProductList;

