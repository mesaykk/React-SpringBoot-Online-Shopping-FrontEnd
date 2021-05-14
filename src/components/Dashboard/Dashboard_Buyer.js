import React from 'react';
import AddProduct from './AddProduct';
import Orders from './Orders';
import { Link, Route, Switch } from 'react-router-dom';
import {  Tabs,Tab  } from 'react-bootstrap';
import './Dashboard.css'
import Users from './UserList';
import ProductList from './ProductList';

const Dashboard_Buyer = (props) => {

    return (
        <div className="Dashboard ">

{/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    
  </Tab>
  <Tab eventKey="profile" title="Profile">
    
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    
  </Tab>
</Tabs> */}
            <nav style ={{backgroundColor:'whitesmoke'}}>
            
                <ul>
                    <li >
                        <Link to="/Dashboard/orders"  > Order history</Link></li>

                    <li >
                        <Link to="/Dashboard/addproduct"> Liked Sellers </Link></li>

                </ul>
           
                </nav>
            <Switch>
                
                <Route path="/Dashboard/productlist" component={ ProductList }></Route>
                <Route path="/Dashboard/orders" component={Orders}></Route>
               
          

            </Switch>
        </div>

    )

}
export default Dashboard_Buyer;