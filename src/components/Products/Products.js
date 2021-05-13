import React, { useContext,useState, setError, setLoading, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Product from "../Product/Product";
import { APIConfig } from "../../store/API-Config";
import "./Products.css";
import axios from 'axios';

const Products = (props) => {
  const APIs = useContext(APIConfig);
  const productAPI = APIs.productAPI;

  const [products, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false); 
    const [error, setError] = useState();
    const [selectedId, setSelectedId] = useState(null);

  function fetchProductHandler() {
    const headers = {
      "Access-Control-Allow-Origin": "*",
    };
    setLoading(true);
    setError(null);
    //console.log(isLoading);
    axios(productAPI, { headers })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  useEffect(fetchProductHandler, []);
  
  
  const productSelectedHandler = (id) => {
    setSelectedId(id);
}


  // function to filter products to show by catagory
  //   const filterBy = () =>{
  //     const filtered = products.filter(p=> p==props.catagory)
  //       return (
  //           <div> {filtered}</div>
  //       )

  //   }
  const rproducts = products.map(product => {
    return <Link to={props.match.url + '/' + product.id} key={product.id}>
        <product
            name={product.name}
            price={product.price}
            clicked={() => { productSelectedHandler(product.id) }}
            id={product.id} />
    </Link>
});

  let content = <p >No product available</p>;
    if (rproducts.length > 0) {
        content = rproducts;
    }
    else if (error) {
        content = <p>{error}</p>;
    }
    else if (isLoading) {
        content = <p> Loading ... </p>;  
    }

  return (
    <div className="Products">
      {/* <Product/> */}
      <div class="sidenav">
        {/* <Link to="#" onClick={filterBy, "Electronics"}>Electronics</Link> */}
        <Link to="#">Books</Link>
        <Link to="#">Furniture</Link>
        <Link to="#">Services</Link>
      </div>
      <h1>Products</h1>
      
    </div>
  );
};

export default Products;
