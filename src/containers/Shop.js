import React, {useState, useContext} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import { APIConfig } from "../store/API-Config";
import {AllOrders} from '../store/AllOrders';
import {ProductInCart} from '../store/ProductInCart';

const Shop = (props) => {
    const [cartItems, setCartItems] = useState([]);

  return (
    <APIConfig.Provider
      value={{
        productAPI: "http://localhost:8080/products",
        userAPI: "http://localhost:8080/users",
        productCategoryAPI: "http://localhost:8080/productCategories"
      }}
    >
      <AllOrders.Provider value="">
        <ProductInCart.Provider value={{ cartItems, setCartItems }}>
          <div>
            <Header />
            <Navigation />
            <Footer />
          </div>
        </ProductInCart.Provider>
      </AllOrders.Provider>
    </APIConfig.Provider>
  );
};
export default Shop;
