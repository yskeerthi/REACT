import React from "react";
import '../Props/child.css'
// const {name ,roll,college}=props;
function Child({cardnum='1',name="keerthi" ,roll="2",college="aditya"}){
    return(
        <>
        <div className="main">
            <h1>Name:{name}</h1>
            <h5>Roll Number:{roll}</h5>
            <h2>College:{college}</h2>
            <h1>Number:{cardnum}</h1>
        </div>
        
        

        {/* if props is mentioned then use props.name ---><h1>Name:{props.name}</h1>  */}
        </>
    )
}
export default Child;