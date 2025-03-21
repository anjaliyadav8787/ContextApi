import React, { useEffect, useState } from 'react'

const Home = () => {
 const[allData,setallData]=useState([]);
 console.log(allData)

    const getData = async()=>{
        let res=await fetch('https://www.dummyjson.com/products?limit=0')
        let data=await res.json()
        // console.log(data.products)
        setallData(data.products)
    
    }
    useEffect(()=>{
        getData()
    },[])
    


    return (
            <div>
    {
        allData.map((ele,i)=>{
            return<div>
                    <img src={ele.thumbnail} alt="" />
                    <h1>{ele.category}</h1>
                </div>
            
    })
    }
 </div>
)
}

export default Home
