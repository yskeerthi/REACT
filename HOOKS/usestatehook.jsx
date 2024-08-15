import React from "react";
import {useState} from 'react';
    const UseStateTwo=()=>{
        const[counter,setCounter]=useState(0);
        //for usestatethreee function
        const [hello,setHello]=useState(0);
        const [flag,setFlag]=useState(true);
        const changeFlag=()=>{
            if(counter<10){
                setCounter(counter+1);
                // flag+=1;
                // console.log(flag);
            }     
        }
        const decrease=()=>{
            if(counter>0){
                setCounter(counter-1);
            }
        }
        const reset=()=>{
            setCounter(0);
        }
            const changeState=()=>{
                setFlag(!flag);
                setHello(prev=>prev+1);
            }
    return(
        <>
        <h1>USE STATE<span style={{color:'red'}}>HOOK</span></h1>
        <p>Flag value{flag}</p>
        <p>Counter Value={counter}</p>
        <button onClick={changeFlag}>ChangeFlag</button>
        <button onClick={decrease}>Decrease counter</button>
        <button onClick={reset}>Reset counter</button>
        <p>Hello People!{hello}
            {/* {
                flag? <h1>Its true</h1>: <h1>Its false</h1>
            } */}
        </p>
        <button onClick={changeState}>Change state</button>
        </>
    )
}

export default UseStateTwo;