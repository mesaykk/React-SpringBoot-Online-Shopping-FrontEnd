import React from 'react';
import AddProduct from './SellerDashboard/AddProduct';
import Orders from './SellerDashboard/Orders';
import { Link, Route, Switch } from 'react-router-dom';

import './Dashboard.css'
import Users from './UserList';
import ProductList from './ProductList';

const Dashboard = (props) => {

    return (
        <div className="Dashboard ">
            
            
                <ul>
                    <li >
                        <Link to="/Dashboard/productlist" > List of Products</Link></li>
                    <li >
                        <Link to="/Dashboard/users" >List of Users</Link></li>
                    <li >
                        <Link to="/" >List of Sellers</Link></li>

                    <li >
                        <Link to="/Dashboard/orders"  > List of Orders</Link></li>

                    <li >
                        <Link to="/Dashboard/addproduct"  > Add Products</Link></li>

                </ul>
           

            <Switch>
                <Route path="/Dashboard/addproduct" component={ AddProduct }></Route>
                <Route path="/Dashboard/productlist" component={ ProductList }></Route>
                <Route path="/Dashboard/orders" component={Orders}></Route>
                <Route path="/Dashboard/users" component={Users}></Route>
          

            </Switch>
        </div>

    )

}
export default Dashboard;