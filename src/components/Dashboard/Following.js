


import React, { useState,useRef,useContext } from "react";
import { LikedSeller } from '../../store/LikedSeller';


const Following =(props) => {

    const { likedSeller, setLikedSeller } = useContext(LikedSeller);
    

    const following = useRef();

    // to see liked posts
   const seeLikedSeller= () =>{
 
    LikedSeller.forEach(element => console.log(element))

    
  

   }
   
    

        return (

            <div className= "Following" >{seeLikedSeller}
                <button onClick={seeLikedSeller}>See sellers</button>
                
              <h1 ref="following">Followed sellers</h1>

            </div>
        )

}
export default Following;