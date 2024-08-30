import React,{useState} from "react";
const Forms = () => {
    const [name,setName]=useState('');
    const [number,setPhoneNumber]=useState();
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');

    const handleChange = (e) =>{
        const name=e.target.name;
        const value=e.target.value;
        console.log("name: "+name+" "+"value: "+value);
    }
    return(
        <>
        <h1>Forms</h1>
        <input type="text" placeholder="Enter Name" name="name" onChange={(e)=>handleChange(e)}/> <br />
        <input type="number" placeholder="Enter phone nummber" name="number" onChange={(e)=>handleChange(e)}/><br />
        <input type="password" placeholder="Enter password" name="password" onChange={(e)=>handleChange(e)}/><br />
        <input type="email" placeholder="Enter email" name="email" onChange={(e)=>handleChange(e)}/>
        <h1>Name: {name}</h1>
        <h1>Number: {number}</h1>
        <h1>Password: {password}</h1>
        <h1>Email: {email}</h1>
        </>
    )
}
export default Forms;