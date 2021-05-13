import React, {useContext} from 'react';
import {ProductInCart} from '../../store/ProductInCart'


const Product =(props) =>{

    const { addedProducts, setAddedProducts} = useContext(ProductInCart); 
    return(
        <div className='product' >
      

            {/* productname */}
            <h1>{props.name}</h1>
            <div className = 'Info'>
                {/* <div className='image'> {props.image}</div> */}
                <div className='description'>{props.description} </div>
                <div className='addedOn'> {props.AddedOn}</div>
                <div className='price'>{props.price} </div>
                {/* <div className='size'> {props.size}</div> */}
                <div className='Catagory'> {props.Catagory}</div>
                {/* <div className='rating'> {props.rating}</div> */}
            </div>
            {
                addedProducts.includes(props.id)
                ?
                
                <button onClick={() => { 
                    const newAddedproducts =addedProducts.filter(p=> p!==props.id); setAddedProducts(newAddedproducts);
                  
                   console.log(newAddedproducts)}}>
                   
                    Remove </button>
                :
                <button onClick={() => {  setAddedProducts([...addedProducts, props.id]); 
                
                   
                  console.log(addedProducts);}}>
                    Add To cart </button>
            }

           
        </div>
    )
}

export default Product;

