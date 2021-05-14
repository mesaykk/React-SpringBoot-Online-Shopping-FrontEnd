import React, { useContext } from "react";
import { ProductInCart } from "../../store/ProductInCart";
import ProductData from "../../Data/ProductData";
import { Card, Button } from "react-bootstrap";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Product = (props) => {
  //const { addedProducts, setAddedProducts} = useContext(ProductInCart);
  return (
    <div className="product">
      <h1>{ProductData[0].name}</h1>
      <div className="Info">
        <div className="image"> {ProductData[0].image}</div>
        <div className="description">{ProductData[0].description} </div>
        <div className="price">{ProductData[0].unitPrice} </div>
        <div className="size"> {ProductData[0].itemSize}</div>
        <div className="Catagory"> {ProductData[0].catagory}</div>
        <div className="rating">
          
          <span ><FontAwesomeIcon icon={faStar} /></span>
          <span ><FontAwesomeIcon icon={faStar} /></span>
          <span ><FontAwesomeIcon icon={faStar} /></span>
          <span ><FontAwesomeIcon icon={faStar} /></span>
          <span ><FontAwesomeIcon icon={faStarHalf} /></span>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Product;
