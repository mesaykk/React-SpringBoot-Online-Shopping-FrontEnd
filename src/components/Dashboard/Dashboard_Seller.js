import React from 'react';
import AddProduct from './AddProduct';
import Orders from './Orders';
import { Link, Route, Switch } from 'react-router-dom';
import {  Tabs,Tab  } from 'react-bootstrap';
import './Dashboard.css'
import Users from './UserList';
import ProductList from './ProductList';

const Dashboard_Seller= (props) => {

    return (
        <div className="Dashboard ">

            <nav style ={{backgroundColor:'whitesmoke'}}>
            
                <ul>
                    
                <li >
                        <Link to="/Dashboard/addproduct"> Add Products</Link></li>

                    <li >
                        <Link to="/Dashboard/orders"  > List of Orders</Link></li>

                    

                </ul>
           
                </nav>
            <Switch>
                <Route path="/Dashboard/addproduct" component={ AddProduct }></Route>
                <Route path="/Dashboard/orders" component={Orders}></Route>
                
          

            </Switch>
        </div>

    )

}
export default Dashboard_Seller;