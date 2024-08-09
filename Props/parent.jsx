import React from "react";
import Child from './child';
function Parent(){
    return(
        <>

            <Child cardnum={1} name="hero" roll='123' college='ACET'/>
            <Child cardnum={2} name="hero" roll='123' college='ACET'/>
            <Child cardnum={3} name="hero" roll='123' college='ACET'/>
            <Child cardnum={4} name="hero" roll='123' college='ACET'/>
            <Child cardnum={5} name="hero" roll='123' college='ACET'/>
            <Child cardnum={6} name="hero" roll='123' college='ACET'/>
            <Child cardnum={7} name="hero" roll='123' college='ACET'/>
            <Child/>
        </>
    )
}
export default Parent;