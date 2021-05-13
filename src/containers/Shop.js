import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation';
import { APIConfig } from '../store/API-Config';


const Shop = (props) => {


    return (
        <APIConfig.Provider
            value={{
                productAPI: "http://localhost:8080/products",
                userAPI: "http://localhost:8080/users"

            }}>


            <div>
                <Header />
                <Navigation />
                <Footer />
            </div>
        </APIConfig.Provider>
    )
}
export default Shop;