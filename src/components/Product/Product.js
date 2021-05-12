import React from 'react';



const Product =(props) =>{

    return(
        <div className='product' >
                

            {/* productname */}
            <h1>{props.name}</h1>
            <div className = 'Info'>
                <div className='image'> {props.image}</div>
                <div className='description'>{props.description} </div>

                <div className='price'>{props.price} </div>
                <div className='size'> {props.size}</div>
                <div className='rating'> {props.rating}</div>
            </div>

           
        </div>
    )
}

export default Product;

