import React, { useContext } from "react";

import {Table, Dropdown, DropdownButton} from 'react-bootstrap';
import {AllOrders} from '../../store/AllOrders';


const Orders = (props) => {
  const orderContext = useContext(AllOrders);

  let date = new Date().getFullYear;

  const total = 0;

  const getTotalAmount = () => {
    return orderContext.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    );
  };
  return (
    <div className="Order">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#id</th>
            <th>Date</th>
            <th>Customer </th>
            <th>Address</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.Date}</td>
            <td>{(props.firstname, props.lastname)}</td>
            <td>{props.address}</td>
            <td>{props.price}</td>
            <td>{props.amount}</td>
            <td>{getTotalAmount}</td>
            <td>
              <select name="status" id="status">
                <option value="Shipped">Shipped</option>
                <option value="On the way">On the way</option>
                <option value="Delivered">Delivered</option>
              </select>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
