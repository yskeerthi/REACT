import React, { useState } from "react";
function OnChangeEvent()
{
    const [name,setName]=useState('');
    const changeName=(event)=>{
        // console.log(event.target.value);
        setName(event.target.value);
    }
    return(
        <>
        <h1>OnChange Events</h1>
        <input type="text" onChange={(e)=>changeName(e)}></input>
        <h1>Name:{name}</h1>
        </>
    )
}
export default OnChangeEvent;