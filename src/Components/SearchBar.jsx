import React, { useContext, useState } from 'react'
import { CgSearch } from "react-icons/cg";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios"
 
import Context from "../context/Context.jsx"

const SearchBar = ({name}) => {
    const navigate = useNavigate()

    const auth = useContext(Context)

    const [query, setQuery] = useState('');

    const handelSearch=async()=>{
        await auth.setQueryData(query)
        navigate("/search")
    }

    return (
    <>
    <section className="flex items-center justify-center my-5 ">
        {/* <!-- Search Logo --> */}
        <div className="mr-3 ">
            <CgSearch onClick={()=>handelSearch()}  className="h-6 w-6 text-[#ccc]"/>
        </div>
        {/* <!-- Input Bar --> */}
        <div className="relative w-[80%]">
            <input 
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            type="text"
             placeholder={` ${name}`}
             className="py-2 px-3 w-[90%] border-b-2 border-gray-400 mt-1 text-[#ccc] outline-none bg-transparent border-transparent focus:border-white transition-all duration-300" id="searchInput"/>
        </div>
    </section>
    </>
  )
}

export default SearchBar