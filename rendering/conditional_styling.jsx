import React from "react";
import Styles from './conditional_styling.module.css';
import '../rendering/./conditional_styling.css';
 export function StyleFunction(){
    const flag=true;
    return(
        <>
        <h1>Hello world!</h1>
        <div className={`${flag ? Styles.herodynamic:Styles.hero}`}>Hello keerthi!</div>
        <div className={`${flag ? 'herodynamic' :'herotwo'}`}>Bye people!!</div>

        </>
    )
}
// export default StyleFunction;