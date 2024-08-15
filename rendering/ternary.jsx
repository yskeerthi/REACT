import React from "react";
import Image from '../../assets/curly_curly.jpg';
import Images from '../../assets/curly_curly.jpg';
function Ternary (){
    const flag=true;
    return(
        <>
        <h1>hello{`${flag ? 'boys': 'girls'}`}</h1>
        <img src={`${flag ? Image: Images}`}></img>
        {/* <img src={`${flag?'boy2.png' :'boy2.png'}`}></img> */}
        </>
    )
}
 export function Rendertwo(){
    const condition=true;
    return(
        <>
        <h1>Helloo girls!!!!!!</h1>
        {
            condition && <h1>Ofcourse girl! You are always True......</h1>
        }
        </>
    )
}
export default Ternary;
// export default Rendertwo;