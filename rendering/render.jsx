import React from "react";
import Image from '../../assets/curly_curly.jpg';
function Render(){
    const flag=true;//u are declaring here by default to true.
    if(flag==true){
        // console.log('its true bro!');
        return (
            <>
            <h1>Helloo keeruuu!😁 </h1>

            <img src={Image} style={{width:"350px", height:"300px" }}></img>
            </>
        )
    }
    else{
        // console.log('its false bro!');
        return(
            <>
            <h1>Its a  Render Page</h1>
            </>
        )
    }
  
}
export default Render;