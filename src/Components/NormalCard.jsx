

import React, { useContext } from 'react'
import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";
import { IoPlayCircle } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { MdLocalMovies } from "react-icons/md";
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import Context from "../context/Context"


const NormalCard = ({data}) => {

const navigate = useNavigate()	
const auth = useContext(Context)



const handelBookMark = () =>{
	if(auth.isAuthenticated===false){
		setTimeout(()=>{
            navigate("/login")
        },1000)
	}
	else{
		// console.log(data.isBookmarked=!data.isBookmarked)	
		if(data.isBookmarked === true){
			auth.setBookmarkedData([...auth.bookmarkedData,data])
		}
		else{
			auth.setBookmarkedData(auth.bookmarkedData.filter((val)=>{
                return val._id!== data._id
				
            }))
		}
	}
	
}


const handelPlay = () =>{
	if(data.itemType==="Movie"){
		navigate(`/movie/${data._id}`)
	}else{
		navigate(`/tvshow/${data._id}`)
	}
}




  return (
    <>
    
<div className='z-10'>
    <div className="w-[95%] h-5/6 relative flex flex-col  justify-between gap-2 group ml-8 sm:ml-2 md:ml-2 lg:ml-2 ">
					<div className="w-[90%] h-[12rem] relative ">
						{/* Poster image */}
							<img
								src={data.imageUrl} 
								className="w-full h-full rounded-xl absolute z-10 group-hover:opacity-55"
								alt=""
							/>
						
							{/* <div className="w-full h-full rounded-xl flex items-center justify-center absolute z-10 group-hover:opacity-55">
								No Image Preview
							</div> */}
						{/* Bookmark icon */}
							<CiBookmark onClick={()=>handelBookMark()}
								className={`absolute z-50 right-1 top-1 text-2xl p-1 rounded-full cursor-pointer md:text-3xl md:right-2 md:top-2 lg:text-4xl 
								 ${data.isBookmarked ? 'bg-[#bcbcbc] hover:bg-[#171717]' : 'bg-[#000000e4] hover:bg-[#ccc]'}`}
							  
							/>
						
						{/* Play button */}
						<div onClick={()=>handelPlay()}
							className="hidden group-hover:flex bg-[#ffffff7c] absolute top-1/2 left-1/2 -translate-x-1/2 px-2 py-1 z-50 rounded-full gap-1 items-center -translate-y-1/2 cursor-pointer lg:px-6 lg:py-2 lg:gap-3">
							<IoPlayCircle className="text-xl md:text-3xl"  />
							<span className="text-BodyS md:text-BodyM lg:text-HeadingXS">
								Play
							</span>
						</div>
					</div>
					{/* Metadata */}
					<div className="w-full h-1/6 flex flex-col">
						<p className="flex items-center text-BodyS font-light md:text-BodyM">
							<span>{data.trending?"Trends Now":"Vintage"}</span>
							<LuDot className="text-BodyS md:text-BodyM" />
							<span className="flex items-center gap-1">
									<>
										<MdLocalMovies /> <span>{data.itemType}</span>
									</>
							</span>
							<LuDot className="text-BodyS md:text-BodyM" />
							<span>18+</span>
						</p>
						{/* Title */}
						<p className="text-BodyM md:text-HeadingXS">{data.title}</p>
					</div>
				</div>
		</div>
    </>
  )
}

export default NormalCard