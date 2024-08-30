import React, { useState } from "react";
import { dataObj } from "./dummydata";
import { Print_Data } from "./Printing_Data";
import './listobj.css';

 function ListObject(){
    const [data,setdata]=useState(dataObj);

    const Sorting=()=>{
        const dummydata=[...data];
        dummydata.sort((n1,n2)=>n1.price-n2.price);
        const total=dummydata.reduce((total,val)=>total+=val.price,0);
        setdata(dummydata);
        console.log(total.toFixed(2));
    }
    
    const totalcost=()=>{
        return data.reduce((sum,item)=>sum+=item.price,0);
    }
    
    const [searchedpara, setSearchedPara] = useState('');
    const SearchedData=(e)=>{
        console.log(e.target.value);
        setSearchedPara(e.target.value)
    }

    const searchedData = searchedpara.toLowerCase();
    const filterData= data.filter((data)=>{
            const nameincludes = data.productName.toLowerCase().includes(searchedData);
            const costincludes = data.price.toString().includes(searchedData);

            return nameincludes || costincludes
            
});
    console.log(filterData);
    const likecard=(id)=>{
        
    }

    return(
        <div className="body">
            <h1>The Data</h1>
            <div className="button" onClick={Sorting}>Sort Data</div>
            <input className="input" type="text" placeholder="Search here" onChange={(e)=>SearchedData(e)}/>
            {filterData ? <Print_Data data={filterData}/>: <Print_Data data={data}/>}
            <div className="cost">Total Cost: {totalcost()}</div>

        </div>
    )
}
export default ListObject;