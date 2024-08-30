import React from "react";
import './listobj.css';

export function Print_Data({data}){
    
    return(
        <>
          {
            data.map((product)=>{
                return(
                    <>
                    <div className="parent">
                       <p className="box"><b>Product Id: </b> {product.productId}</p>
                       <p className="box"><b>Product Name: </b>{product.productName}</p>
                       <p className="box"><b>Brand: </b>{product.brand}</p>
                       <p className="box"><b>Price: </b>{product.price}</p>
                       <p className="box"><b>Instock: </b>{product.inStock}</p>
                       <p className="box"><b>Rating: </b>{product.rating}</p>
                       <p className="box"><b>Features: </b>{product.features}</p>
                       <p className="box"><b>Warranty: </b>{product.warranty}</p>
                    </div>
                    </>
                )
            })
          }
        </>
    )
}