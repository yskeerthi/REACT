import React from "react";
function OnMouseEvent()

{
    return(
        <>
            <h1>Mouse Events</h1>
            <div onMouseEnter={()=> console.log('mouse entered')} style={{width:'100px' ,height: '200px', backgroundColor:'red'}}></div>
            <div onMouseLeave={()=> console.log('mouse leaved')} style={{width:'100px' ,height: '200px', backgroundColor:'blue'}}></div>
        </>
    )
}
export default OnMouseEvent;