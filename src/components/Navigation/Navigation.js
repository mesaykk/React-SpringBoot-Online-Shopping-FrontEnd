


import { Link, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faSignInAlt, faSignOutAlt, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Dropdown,DropdownButton} from 'react-bootstrap';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Navigation.css'
import Footer from '../Footer/Footer';
import Manager from '../Manager/Manager';
import RegisterSeller from '../Register/RegisterSeller';




const Navigation = () => {
  return (
    <div className='Navigation'>
      <nav>
        <ul>
          <li style={{ textAlign: 'center' }}>
            <Link to="/home"  >Home</Link></li>
          <li style={{ textAlign: 'center' }}>
            <Link to="/products"  >Products</Link></li>

          <li style={{ float: 'right' }}>
            
            <DropdownButton id="dropdown-basic-button" title="Sign Up"> 
              <Dropdown.Item href="/register">Shop</Dropdown.Item>
              <Dropdown.Item href="/registerseller"> Sell</Dropdown.Item>
            </DropdownButton>

            {/* <Link to="/register"  > <FontAwesomeIcon icon={faUserPlus} /> </Link> */}
            </li> 

          <li style={{ float: 'right' }}>
            <Link to="/signin"  > <FontAwesomeIcon icon={faSignInAlt} /> Sign in</Link></li>

          

          <li  style={{ float: 'right' }}>
            <Link to="/manager" >Dashboard</Link> </li>
            
            <li style={{ float: 'right' }}>
            <Link to="/cart"  ><FontAwesomeIcon icon={faShoppingCart} /></Link> </li>

          <li>
            <Link to="/#footer" >Contact Us</Link> </li>


        </ul>
      </nav>

      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/#footer" component={Footer}></Route>
        <Route path="/signin" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/registerseller" component={RegisterSeller}></Route>

        <Route path="/manager" component={Manager}></Route>

      </Switch>
    </div>


  );
}

export default Navigation;