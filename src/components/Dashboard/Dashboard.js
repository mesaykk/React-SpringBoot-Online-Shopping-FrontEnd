import React from 'react';
import AddProduct from './AddProduct';
import Orders from './Orders';
import { Link, Route, Switch } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import './Dashboard.css'
import Users from './UserList';
import ProductList from './ProductList';
import Dashboard_Buyer from './Dashboard_Buyer';
import Dashboard_Seller from './Dashboard_Seller';
import AddProductCategory from './AddProductCategory'
<<<<<<< HEAD

=======
>>>>>>> fde76479d8687775735d4c23fc8de677390743a1


const Dashboard = (props) => {

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
                        <Link to="/Dashboard/addproductCategory"> Add ProductCategory</Link></li>

                    <li >
                        <Link to="/Dashboard/addproduct"> Add Products</Link></li>

                    <li >
                        <Link to="/Dashboard/productlist" > List of Products</Link></li>
                    <li >
                        <Link to="/Dashboard/users" >List of Users</Link></li>
                    <li >
                        <Link to="/Dashboard/users" >List of Sellers</Link></li>

                    <li >
                        <Link to="/Dashboard/orders"  > List of Orders</Link></li>


                </ul>

            </nav>
            <Switch>
           
                <Route path="/Dashboard/addproduct" component={AddProduct}></Route>
                <Route path="/Dashboard/productlist" component={ProductList}></Route>
                <Route path="/Dashboard/orders" component={Orders}></Route>
                <Route path="/Dashboard/users" component={Users}></Route>
                <Route path="/Dashboard/users" component={Users}></Route>
                <Route path="/Dashboard/addproductCategory" component={AddProductCategory}></Route>


            </Switch>
        </div>

    )

}
export default Dashboard;