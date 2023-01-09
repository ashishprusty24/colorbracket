import axios from 'axios'
import React, { useState } from 'react'
import Detail from '../component/Detail'
import Login from '../component/Login'

const Home = () => {
    const [login,setlogin] = useState(false)
    const handlelogin = (e,payload)=>{
  
      e.preventDefault()
       axios.post("http://localhost:8080/login",payload)
       .then((r)=>{
         if(r.status===201){
          setlogin(true)
         }else{
          alert("invalid credential")
         }
       })
       .catch((e)=>{
        console.log(e.message);
       })
    }
  return (
    <div>
         {login ? <Detail /> : <Login handlelogin = {handlelogin}/> }
    </div>
  )
}

export default Home