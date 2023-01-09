import React from 'react'
import { useState } from 'react'

const Login = ({handlelogin}) => {
    const [id,setid] = useState("")
    const [password,setpassword] = useState("")

    const payload = {
        user_id : id,
        password: password
    }
//     const handlelogin = (event)=>{
//         event.preventDefault()

//    console.log(1);
//     }
  
  return (
    <div>
        <form onSubmit={(e)=>handlelogin(e,payload)}>
            <label htmlFor="userid">User id</label>
            <input type="text" name='userid'  onChange = {(e)=>setid(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" name='password' onChange = {(e)=>setpassword(e.target.value)}  />

            <input type="submit"  value= "submit"/>
        </form>
    </div>
    
  )
}

export default Login