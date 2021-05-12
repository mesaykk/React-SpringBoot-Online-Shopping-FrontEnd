import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../image/1.jpg";
import img2 from "../../image/books.jpg";
import img3 from "../../image/electronic.jpeg";
import './Home.css';

const Home = (props) => {
  return (
    <div className="Home">
        
      <Carousel >
        <Carousel.Item >
          
          <img className="d-block w-50 mx-auto" src={img1} alt="First slide" style={{filter: "blur(2px)"}}/>
          <Carousel.Caption style={{color: "black", fontSize: "larger"}}>
            <h3>Shop online</h3>
            <p>Buy and Sell, in your Store</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img className="d-block w-50 mx-auto" src={img2} alt="Second slide" style={{filter: "blur(2px)"}} />

          <Carousel.Caption style={{color: "black", fontSize: "larger"}}>
            <h3>Books</h3>
            <p>Shop Your Favorite Books.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img className="d-block w-50 mx-auto" src={img3} alt="Third slide" style={{filter: "blur(2px)"}}/>

          <Carousel.Caption style={{color: "black", fontSize: "larger"}}>
            <h3>Electronics</h3>
            <p>Shop Your Favorite Electronics </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        

    </div>
  );
};
export default Home;
