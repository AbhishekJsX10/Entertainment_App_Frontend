import React, { useEffect, useState } from 'react'
import { HiLink } from "react-icons/hi";
import { FaImdb } from "react-icons/fa";


import { useParams } from 'react-router-dom';
import axios from 'axios';
import Rates from "../Components/Rates"


const TvShowDisplay = () => {


    const {id} = useParams();
    const [tvData, setTVData] = useState({})
    
    useEffect(()=>{
        try{
            const fetchSingleTV = async() =>{
                const response = await axios.get(`https://back-entertainment.onrender.com/tvshow/${id}`)
                setTVData(response.data.tvshow)
            }
            fetchSingleTV()
    
        }catch(error){console.error(error)}
    },[])
    
    
    const redirectToExternalWebsite = () => {
          window.location.href = tvData.links.IMDb;
    }
    






  return (
    <>
    <div>
    <div className="container mx-auto flex flex-col gap-8  md:flex-row px-12 py-5">
        {/* <!-- Left Section with Sticky Image --> */}
        <div className="w-full md:w-1/3  my-6">
            <img src={`${tvData.imageUrl}`} alt="Sticky Image" className="w-full h-auto" />
        </div>
        
        {/* <!-- Right Section --> */}
        <div className="w-full md:w-2/3 p-4 py-6 px-4">
            {/* <!-- Section 1: Heading Title --> */}
            <h2 className="text-4xl font-bold mb-4">{tvData.title}</h2>

            {/* <!-- Section 2: Rating Count and Stars --> */}
            <div className="flex items-center mb-4 py-3">
                <span className="mr-2 text-lg">Rating: </span>
                <Rates inputValue={tvData.rating} />
            </div>

            {/* <!-- Section 3: Length, Language, Year, and Status --> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4 py-3">
                <div>
                    <h3 className="font-semibold text-[#5A698F]">Language</h3>
                    <p>{tvData.language}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[#5A698F]">First Year</h3>
                    <p>{tvData.firstyear}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[#5A698F]">Last Year</h3>
                    <p>{tvData.lastyear}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-[#5A698F]">Status</h3>
                    <p>{tvData.status}</p>
                </div>
            </div>

            {/* <!-- Section 4: Heading and Buttons --> */}
            <div className="mb-4">
                <h3 className="text-xl font-bold">Geners</h3>
                <div className="flex my-2">
                {tvData && tvData.genre && tvData.genre.map((val,index)=>{
                        return <button key={index} className="bg-[#e0dede] hover:bg-[#ccc] text-black font-semibold py-2 px-4 rounded mr-2">{val}</button>
                    })}
                    
                </div>
            </div>

            {/* <!-- Section 5: Synopsis and Description --> */}
            <div className="mb-4">
                <h3 className="text-2xl font-bold">Synopsis</h3>
                <p className='py-3'>{tvData.synopsis}</p>
            </div>

            {/* <!-- Section 6: Responsive Grid of Buttons --> */}
            <div className="mb-4">
                <h3 className="text-2xl font-bold">Casts</h3>
                <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {tvData && tvData.casts && tvData.casts.map((val,index) => (
                        <button key={index} className="bg-transparent hover:text-black hover:bg-white text-white border-white border-2  text-xl font-semibold py-2 px-0 rounded-xl transition duration-500">
                            {val}
                        </button>
                    ))}
                </div>
            </div>

            {/* <!-- Section 7: Two Buttons in Horizontal Line --> */}
            <div>
                <h3 className="text-xl font-bold">Links to Watch</h3>
                <div className="flex my-3 gap-2">
                    <button className="bg-[#5A698F] hover:bg-[#364058] transition duration-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center mr-2 text-xl">
                        <span className="mr-2 text-lg">Website</span>
                        <HiLink onClick={()=>redirectToExternalWebsite()} />
                    </button>
                    <button className="bg-[#5A698F] hover:bg-[#364058] transition duration-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center mr-2 text-xl">
                        <span className="mr-2 text-lg">IMDB</span>
                        <FaImdb onClick={()=>redirectToExternalWebsite()} />
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default TvShowDisplay

