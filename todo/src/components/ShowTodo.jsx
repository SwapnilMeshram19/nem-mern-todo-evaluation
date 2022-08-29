import axios from 'axios';
import React from 'react';

export const ShowTodo=()=>{
    
    axios({
        method:"get",
        url:"http://localhost:8080/todo/"
    }).then(res=>{console.log(res.data)})
    .catch(error=>{console.log(error)});


    return (
        <div>
            {

            }
        </div>
    )
}