import React from "react";
import './fruits.css';

function FruitsProject(){

    const name="Apple";
    // return(
    //     <>
        // <div className="parent">
            // <div className="fruits_main">
            //     <div className="Apple" onClick={()=>click1()} ><b>Apple</b></div>
            //     <div className="Banana" OnClick={()=>click2('Banana')}><b>Banana</b></div>
            //     <div className="Mango" OnClick={()=>click3('Mango')}><b>Mango</b></div>
            //     <div className="Orange" OnClick={()=>click4('Orange')}><b>Orange</b></div>
            //     <div className="Watermelon" OnClick={()=>click5('Watermelon')}><b>Watermelon</b></div>
            // </div>
{/* <div className="cards_main"> */}
if(name==="Apple"){
return(
    <div className="apple_card">
    <div className="image"></div>
    <div className="content">
        <div className="name">Apple </div> 
        <div className="link">More Info</div>
    </div>
</div>
)
}
else if(name==="Banana")
{
    return(
        <div className="banana_card">
        <div className="banana"></div>
        <div className="content">
            <div className="name">Banana </div> 
            <div className="link">More Info</div>
        </div>
    </div>
    )
}
else if(name==="Mango")
{
    return(
        <div className="mango_card">
        <div className="mango"></div>
        <div className="content">
            <div className="name">Mango </div> 
            <div className="link">More Info</div>
        </div>
    </div>
    )
}
else if(name==="Orange") 
    {
        <div className="orange_card">
            <div className="orange"></div>
            <div className="content">
                <div className="name">Orange </div> 
                <div className="link">More Info</div>
            </div>
        </div>
}        
else{
    <div className="watermelon_card">
    <div className="watermelon"></div>
    <div className="content">
        <div className="name">Watermelon </div> 
        <div className="link">More Info</div>
    </div>
</div>
}       
           
           
           
            
            // </div>
        {/* </div> */}
        // </>
    // )
}

export default FruitsProject;
