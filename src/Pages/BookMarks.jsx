



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
        // const fetchData = async () => {
        
        //     try {
        //         const response = await axios.get(`https://back-entertainment.onrender.com/bookmarks/all`, {
        //             headers: {
        //                 "Content-Type": "application/json"
        //             },
        //             withCredentials: true,
        //         });
        //         console.log(response.data.data)
    
        //         var tempData = response.data.data
    
        //         // Map over the tempData and await each axios request
        //         const bookmarkData = await Promise.all(tempData.map(async (val) => {
        //             if (val.itemType === "Movie") {
        //                 const response2 = await axios.get(`https://back-entertainment.onrender.com/movies/${val.itemId}`)
        //                 return response2.data.movie; // Return data from axios response
        //             } else if (val.itemType === "TV Show") {
        //                 const response2 = await axios.get(`https://back-entertainment.onrender.com/tvshow/${val.itemId}`)
        //                 return response2.data.tvshow
        //                 ; 
        //             }
        //         }));
    
        //         setBookmarks(bookmarkData); // Set state with resolved data
    
        //     } catch (error) {
        //         console.error("Error fetching media data:", error);
        //     }
        // }
        // fetchData();

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
                    {bookmarks.map((val)=>{
                            return <NormalCard data={val}/>
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