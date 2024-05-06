import React, { useState,useEffect } from 'react'
import SearchBar from '../Components/SearchBar'
import NormalCard from '../Components/NormalCard'
import axios from "axios"
import Loader from "../Components/Loader"

const TvShows = () => {

const [allTvShows,setAllTvShows] = useState([])
useEffect(()=>{
    const fetchAllTvShows = async()=>{
        const response = await axios.get("https://back-entertainment.onrender.com/tvshow/all")
        setAllTvShows(response.data.tvShows)
    }
    fetchAllTvShows()
},[])



  return (
    <>
    <div className='flex flex-col w-[100%] bg-transparent'>
    <SearchBar name="Search for TV-Shows"/>
    <section className="container mx-auto  py-12">
        {/* <!-- Heading --> */}
        <h2 className="text-2xl font-semibold mb-6 mx-5">TvShows</h2>
        
        {/* <!-- Cards --> */}
        <div>
            {allTvShows.length===0 ? (<Loader/>):(
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {allTvShows.map((val,index)=>{
                        return <NormalCard key={index} data={val}/>
                    })}
                </div>
            )}
        </div>
    </section>
    </div>
    </>
  )
}

export default TvShows;