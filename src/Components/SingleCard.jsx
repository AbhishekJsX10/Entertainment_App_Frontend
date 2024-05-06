import { useContext, useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";
import { IoPlayCircle } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import Context from "../context/Context"

const SingleCard = ({cards}) => {

	const navigate = useNavigate()	
const auth = useContext(Context)


const handelBookMark = () =>{
	if(auth.isAuthenticated===false){
		setTimeout(()=>{
            navigate("/login")
        },1000)
	}
	else{
		console.log(cards.isBookmarked=!cards.isBookmarked)	
		if(cards.isBookmarked === true){
			auth.setBookmarkedData([...auth.bookmarkedData,cards])
		}
		else{
			auth.setBookmarkedData(auth.bookmarkedData.filter((val)=>{
                return val._id!== cards._id
            }))
		}
	}
	
}


const handelPlay = () =>{
	if(cards.itemType==="Movie"){
		navigate(`/movie/${cards._id}`)
	}else{
		navigate(`/tvshow/${cards._id}`)
	}
}

	return (
		<>
				<div className="w-[90%] h-[25rem] overflow-hidden relative group mx-5 sm:mx-2 md:mx-0 lg:mx-0">
					{/* Poster image */}
						<img
							src={cards.imageUrl} 
							className="w-full h-full rounded-xl absolute z-10 group-hover:opacity-55"
							alt=""
						/>
					{/* Overlay */}
					<div className="w-[100%] h-[25rem] z-40 relative bg-gradient-to-b from-transparent to-[#000000be] rounded-xl">
						{/* Metadata */}
						<div className="absolute bottom-1 left-2 md:bottom-2 md:left-3 lg:bottom-3 lg:left-5">
							<p className="flex items-center text-BodyS font-light md:text-BodyM lg:text-HeadingXS">
								<span>{cards.title}</span>
								<LuDot className="text-HeadingXS" />
								<span className="flex items-center gap-1">
										<>
											<MdLocalMovies /> <span>{cards.itemType}</span>
										</>
								</span>
								<LuDot className="text-HeadingXS" />
								<span> 18+</span>
							</p>
							{/* Title */}
							<p className="text-BodyM md:text-HeadingXS lg:text-HeadingM">
								{cards.Title}
							</p>
						</div>
						{/* Bookmark icon */}
							<IoMdBookmark onClick={()=>handelBookMark()}
								className="absolute z-50 right-1 top-1 bg-[#00000070] text-2xl p-1 rounded-full hover:bg-white hover:fill-black cursor-pointer md:text-3xl md:right-2 md:top-2 lg:text-4xl"
							/>
							<CiBookmark onClick={()=>handelBookMark()}
								className={`absolute z-50 right-1 top-1 text-2xl p-1 rounded-full cursor-pointer md:text-3xl md:right-2 md:top-2 lg:text-4xl 
								${data.isBookmarked ? 'bg-[#bcbcbc] hover:bg-[#171717]' : 'bg-[#000000e4] hover:bg-[#ccc]'}`}
							   
							/>
						{/* Play button */}
						<div onClick={()=>handelPlay()}
							className="hidden group-hover:flex bg-[#ffffff7c] absolute top-1/2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gap-2 items-center -translate-y-1/2 cursor-pointer md:px-4 md:py-2">
							<IoPlayCircle className="text-xl md:text-4xl" />
							<span className="text-BodyS md:text-BodyM lg:text-HeadingXS">
								Play
							</span>
						</div>
					</div>
				</div>
		</>
	);
};

export default SingleCard;