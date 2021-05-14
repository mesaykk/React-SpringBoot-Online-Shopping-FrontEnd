import React, {
  useContext,
  useState,
  setError,
  setLoading,
  useEffect,
} from "react";
import { Link, Route, Switch } from "react-router-dom";
import Product from "../Product/Product";
import { APIConfig } from "../../store/API-Config";
import "./Products.css";
import axios from "axios";
import ProductData from "../../Data/ProductData";
import { Card, Button, CardDeck } from "react-bootstrap";
import img1 from "../../image/6.jpg";
import img2 from "../../image/12.jpg";
import img3 from "../../image/8.jpg";
import img4 from "../../image/da-vinci-code.jpg";



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
  };

  //function to filter products to show by catagory
  // const filterBy = (catagory) => {
  //   const filtered = ProductData.filter((p) => p == props.catagory);
  //   return (<div> {filtered}</div>);
  // };
  const rproducts = products.map((product) => {
    return (
      <Link to={props.match.url + "/" + product.id} key={product.id}>
        <product
          name={product.name}
          price={product.price}
          clicked={() => {
            productSelectedHandler(product.id);
          }}
          id={product.id}
        />
      </Link>
    );
  });

  let content = <p>No product available</p>;
  if (rproducts.length > 0) {
    content = rproducts;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = <p> Loading ... </p>;
  }

  return (
    <div className="Products">
      {/* <Product/> */}
      <div class="sidenav" >
        
        <Link to="#" >Books</Link>
        <Link to="#">Electronics</Link>
        <Link to="#">Furniture</Link>
        <Link to="#">Services</Link>
      </div>

      <div>
        
        <CardDeck style={{  width: '850px'}}>
          <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={img1}  />
            {/* <img src={img1}></img> */}
            <Card.Body>
              <Card.Title>{ProductData[0].productName}</Card.Title>
              <Card.Text>Unit price : {ProductData[0].unitPrice}</Card.Text>
              <Button variant="primary" >
                
                <Link to="/product" ></Link>See More
              </Button><span/>
              <Button style={{float: "right"}} variant="primary" onClick={Product}>
              
                <Link to="/product"></Link>Add to Cart
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>{ProductData[1].productName}</Card.Title>
              <Card.Text>Unit price : {ProductData[1].unitPrice}</Card.Text>
              <Button variant="primary">
                {" "}
                <Link to={Product}></Link>See More
              </Button>
              <Button style={{float: "right"}} variant="primary" onClick={Product}>
                {" "}
                <Link to="/product"></Link>Add to Cart
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img4} style={{maxHeight:"400px"}}/>
            <Card.Body>
              <Card.Title>{ProductData[2].productName}</Card.Title>
              <Card.Text>Unit price : {ProductData[2].unitPrice}</Card.Text>
              <Button variant="primary">
                {" "}
                <Link to='/product'></Link>See More
              </Button>
              <Button style={{float: "right"}} variant="primary" onClick={Product}>
                {" "}
                <Link to="/product"></Link>Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <Switch>
        <Route path="/product" component={Product}> </Route>
      </Switch>
    </div>
  );
};

export default Products;
