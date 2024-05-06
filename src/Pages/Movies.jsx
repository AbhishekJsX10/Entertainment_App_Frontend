import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import axios from "axios"
import NormalCard from '../Components/NormalCard'
import Loader from '../Components/Loader'
const Movies = () => {

const [allMovies,setAllMovies] = useState([])

useEffect(()=>{
    try{
        const fetchMovies = async()=>{
            const response= await axios.get("https://back-entertainment.onrender.com/movies/all")
            // console.log(response.data.movie)
            setAllMovies(response.data.movie)
        }
        fetchMovies()
    }catch(error){
        console.error(error)
    }
},[])



  return (
    <>
    <div className='flex flex-col w-[100%] bg-transparent'>
    <SearchBar name="Search for Movies"/>
    <section className="container mx-auto  py-12">
        {/* <!-- Heading --> */}
        <h2 className="text-2xl font-semibold mb-6 mx-5">Movies</h2>
        
        {/* <!-- Cards --> */}
        <div className=' py-2'>
            {allMovies.length===0 ? (<Loader/>):(
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {allMovies.map((val,index)=>{
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

export default Movies