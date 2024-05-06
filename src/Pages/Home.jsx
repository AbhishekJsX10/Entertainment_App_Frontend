

import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import NormalCard from "../Components/NormalCard"
import AutoScrollCarousel from '../Components/AutoScrollCarousel'
import axios from "axios"
import Loader from "../Components/Loader"

const Home = () => {

var [trending_Data,setTrending_data]=useState([])
const [recommend_Data,setRecommend_data]=useState([])



useEffect(()=>{
    try{
        const fetchTrends = async()=>{
            const response = await axios.get("https://back-entertainment.onrender.com/trends/all")
            // console.log("trend data: ",response.data.data)
            setTrending_data(response.data.data)
        }
        
        const fetchRecommended = async()=>{
            const response = await axios.get("https://back-entertainment.onrender.com/recommends/all")
            // console.log("recoomedndd data: ",response.data.data)
            setRecommend_data(response.data.data)
        }


        fetchTrends()
        fetchRecommended()
    }
    catch(error){
        console.error(error)
    }
},[])

  return (
    <>
    <div className='flex flex-col w-[100%] bg-transparent'>
    {/* 1st section search section*/}
    <SearchBar name="Search for Movies and TV series"/>

    {/* 2nd section trending section */}
    <section className="container mx-auto py-8">
        {/* <!-- Heading --> */}
        <h2 className="text-2xl font-semibold mb-6 text-left mx-5 ">Trending</h2>
        {/* <!-- Cards --> */}
        <div className='my-5'>
            {trending_Data.length === 0 ? (<Loader/>):(
                <div className="grid grid-cols-1 gap-4 my-5">
                    <AutoScrollCarousel data={trending_Data}/>
                </div>
            ) }
        </div>
    </section>

    {/* 3rd section Recommendation section*/}
    <section className="container mx-auto  py-4">
        {/* <!-- Heading --> */}
        <h2 className="text-2xl font-semibold mb-6 mx-5">Recommended for You</h2>
        
        {/* <!-- Cards --> */}
        <div>
            {recommend_Data.length===0 ? (<Loader/>):(
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {recommend_Data.map((data,index)=>{
                        return <NormalCard key={index} data={data}/>
                    })}
                </div>
            )}
        </div>
    </section>

    </div>
    </>
  )
}

export default Home