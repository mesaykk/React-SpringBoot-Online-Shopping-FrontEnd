import React, { useContext } from 'react';
import Product from '../Product/Product';
import {APIConfig} from '../../store/API-Config';


const Products =() =>{

    const APIs = useContext(APIConfig);
    const productAPI = APIs.productAPI;

    return(
        <div>
            <h1>Products</h1>
           
        </div>
    )
}

export default Products;

