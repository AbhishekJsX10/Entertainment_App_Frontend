



import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import NormalCard from '../Components/NormalCard';
import axios from 'axios';
import BookMarkHelp from './BookMarkHelp';
import Context from "../context/Context"
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookMarks = () => {

const [bookmarks,setBookmarks] = useState([])

const navigate=useNavigate()

const auth = useContext(Context)


useEffect(() => {
    
    if(!auth.isAuthenticated){
        setTimeout(()=>{
            navigate("/login")
        },2000)
        toast.error(`Please Login First`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

    }else{
        
        setBookmarks([...auth.bookmarkedData])

    }
    
}, [auth.isAuthenticated, navigate]);


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
    {/* 1st section search section*/}
    <SearchBar name="Search for Movies and TV series"/>


    {/* 3rd section Recommendation section*/}
    <section className="container mx-auto  py-12">
        {/* <!-- Heading --> */}
        <h2 className="text-2xl font-semibold mb-6 mx-5">BookMarked Movies And Tv Show's</h2>
        
        {/* <!-- Cards --> */}
        <div>
            {bookmarks.length===0 ?(<BookMarkHelp text="bookmark"/>):(
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {bookmarks.map((val,index)=>{
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

export default BookMarks;