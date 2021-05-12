import React from 'react';
import AddProduct from './AddProduct';
import Orders from './Orders';
import { Link, Route, Switch } from 'react-router-dom';

import './Manager.css'
import Users from './UserList';
import ProductList from './ProductList';

const Manager = (props) => {

    return (
        <div className="Manager">
            
            
                <ul>
                    <li >
                        <Link to="/manager/productlist" > List of Products</Link></li>
                    <li >
                        <Link to="/manager/users" >List of Users</Link></li>
                    <li >
                        <Link to="/" >List of Sellers</Link></li>

                    <li >
                        <Link to="/manager/orders"  > List of Orders</Link></li>

                    <li >
                        <Link to="/manager/addproduct"  > Add Products</Link></li>

                </ul>
           

            <Switch>
                <Route path="/manager/addproduct" component={ AddProduct }></Route>
                <Route path="/manager/productlist" component={ ProductList }></Route>
                <Route path="/manager/orders" component={Orders}></Route>
                <Route path="/manager/users" component={Users}></Route>
          

            </Switch>
        </div>

    )

}
export default Manager;