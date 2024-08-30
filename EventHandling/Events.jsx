import React, { useState } from "react";
const Event =()=>{
    const [counter,setCounter]=useState(0);
    const clickMe =(name) =>{
        // console.log(name);
        setCounter(counter+1);
        console.log('its clicked'+ " "+ name);
    
    }
    return(
        <>
        <h1>Events</h1>
        {/* <button onClick={()=> {console.log("its clicked")}}>click me</button> */}
        <button onClick={()=> clickMe('keeruu')}>click me</button>
        {/* <button onClick={()=> setCounter(counter+1)}></button> */}
        <h1>Counter Value:{counter}</h1>
        </>
    )
}
export default Event;