import React from 'react';
import { useState } from 'react';

import axios from 'axios';

export const Login = ()=>{
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");

        const [name,setName]=useState("");

        

        const handleSubmit=()=>{
            let user={
               "email": email,
               "password": password
            }
            axios({
                method:'post',
                url:"http://localhost:8080/user",
                data:user
            }).then(res=>{console.log(res)})
            .catch(error=>{
                console.log(error);
            })
        }

        return (
            <div>
                <h3>Login</h3>
                <div>
                    <input type="text" value={email}  onChange={(event)=>setEmail(event.target.value)}/><br/>
                    <input type="password" value={password}  onChange={(event)=>setPassword(event.target.value)}/><br/>
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        )
    
            
        

    


}