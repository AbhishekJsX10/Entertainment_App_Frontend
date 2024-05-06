import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import axios from "axios"
import NormalCard from '../Components/NormalCard'
import Loader from '../Components/Loader'

import Context from "../context/Context"
import BookMarkHelp from './BookMarkHelp'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SearchPage = () => {

  const navigate = useNavigate()
const auth=useContext(Context)

const [quRes,setQuRes] = useState([])

useEffect(()=>{
  if(!auth.queryData){
    toast.error(`Enter Movie/TvShow name First`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      setTimeout(()=>{
        navigate("/")
    },6000)
  }else{
    const fetchQuery=async()=>{
      try {
          const response = await axios.get(`https://back-entertainment.onrender.com/search?query=${auth.queryData}`);
          setQuRes(response.data);
        } catch (error) {
          console.error('Error fetching results:', error);
        }
  }
  fetchQuery()
  }
},[auth.queryData])



  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className='flex flex-col w-[100%] bg-transparent'>
    <SearchBar name="Search for Movies or Tv Shows"/>
    <section className="container mx-auto  py-12">
        {/* <!-- Heading --> */}
        <h2 className="text-2xl font-semibold mb-6 mx-5">Search Results</h2>
        
        {/* <!-- Cards --> */}
        <div>
            {quRes.length===0 ? (<BookMarkHelp text="Result"/>):(
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {quRes.map((val,index)=>{
                        return <NormalCard key={index} data={val}/>
                    })
                  }
              </div>
            )}
        </div>
    </section>
    </div>
    </>
  )
}

export default SearchPage