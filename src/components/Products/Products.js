import React, { useContext } from "react";
import Product from "../Product/Product";
import { APIConfig } from "../../store/API-Config";
import './Products.css'

const Products = () => {
  const APIs = useContext(APIConfig);
  const productAPI = APIs.productAPI;

  return (
    <div className='Products'>
      <div class="sidenav">
        <a href="#">Electronics</a>
        <a href="#">Books</a>
        <a href="#">Furniture</a>
        <a href="#">Services</a>
      </div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
