import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Receipedetail = () => {
    const [data,setdata] = useState()
    const param = useParams()

    const handledata = () =>{
        axios.get(`http://localhost:8080/steps/${param.id}`)
        .then((r)=>{
            console.log(r.data);
            setdata(r.data)
        })
        .catch((e)=>{
        console.log(e.message);
        })
    }
    useEffect(()=>{
        handledata()
    },[])

    if(data===undefined){
        return <h1>Loading...</h1>
    }
  return (
    <div>
      <img src= {data[0].image_url} alt="item image" />
      <h1> {data[0].items}</h1>
      <h1> {data[0].name}</h1>
      <p>{data[0].step}</p>
    </div>
  )
}

export default Receipedetail