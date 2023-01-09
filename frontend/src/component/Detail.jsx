import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './detail.module.css'
const Detail = () => {
    const [data,setdata] = useState()
    const handlegetdata = ()=>{

        axios.get("http://localhost:8080/receipe")
        .then((r)=>{
           setdata(r.data)
        })
    }

    useEffect(()=>{
        handlegetdata()
    },[])
    console.log(data);
  return (
    <div className= {styles.container} >
        {data && data.map((el)=>(
            <Link to=  {`/user/${el.id}`}>
            
            <div className= {styles.card} >
                <img src= {el.image_url} alt="pulao" />
                <h1> {el.name} </h1>
                <h3> {el.creator_name} </h3>
                <p> {el.desc} </p>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default Detail