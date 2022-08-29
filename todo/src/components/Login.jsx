import React from 'react';
import { useState } from 'react';

export const Login = ()=>{
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");

        const handleSubmit=()=>{
            console.log(email,password);
        }

        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={email}  onChange={(event)=>setEmail(event.target.value)}/><br/>
                    <input type="password" value={password}  onChange={(event)=>setPassword(event.target.value)}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    
            
        

    


}