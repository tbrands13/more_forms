import React, { useState } from 'react';




const Form = props => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfrmPassword, setcnfrmPassword] = useState("");


const verifyName = (input) => {
    if(input.length < 2){
        return false;
    }
    return true;
}


const verifyEmail = (input) => {
    if(input.length < 5){
        return false;
    }
    return true;
}


const verifyPass = (input) => {
    if(input.length < 8){
        return false;
    }
    return true;
}

const verifyPassCon = (input) => {
    if(input != password){
        return false;
    }
    return true;
}


    return(
        <div>
            <h1>Some Form</h1>
            <form>
                <div className="form-group">
                    <label>First Name:</label>
                    <input className="form-control" type="text"onChange={(event)=>setfirstName(event.target.value)}/>
                    {!verifyName(firstName) && <span className="alert-danger">First Name must be at least 2 characters</span>}
                    <br/>
                    <label>Last Name:</label>
                    <input className="form-control" type="text" onChange={(event)=>setlastName(event.target.value)}/>
                    {!verifyName(lastName) && <span className="alert-danger">Last Name must be at least 2 characters</span>}
                    <br/>
                    <label>Email:</label>
                    <input className="form-control" type="email" onChange={(event)=>setEmail(event.target.value)}/>
                    {!verifyEmail(email) && <span className="alert-danger">Email must be at least 5 characters</span>}
                    <br/>
                    <label>Password:</label>
                    <input className="form-control" type="password" onChange={(event)=>setPassword(event.target.value)}/>
                    {!verifyPass(password) && <span className="alert-danger">Password must be at least 8 characters</span>}
                    <br/>
                    <label>Confirm Password:</label>
                    <input className="form-control" type="password" onChange={(event)=>setcnfrmPassword(event.target.value)}/>
                    {!verifyPassCon(cnfrmPassword) && <span className="alert-danger">Passwords must match</span>}
                </div>
            </form>
        </div>
    )
}

export default Form;