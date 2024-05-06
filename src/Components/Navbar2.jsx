import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillAppstore } from "react-icons/ai";
import { HiBookmark } from "react-icons/hi2";
import { MdLocalMovies, MdMovie } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import Context from '../context/Context';
import { CgLogOut } from "react-icons/cg";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar2 = () => {

  const navigate = useNavigate()

  const auth = useContext(Context)

  const handelNavColor = (e) =>{
    return {
      color: e.isActive ? "#FC4747":"#2a375a",
      fontSize: e.isActive ? "1.1rem":"",
      textDecoration: e.isActive ? "underline":"",
      fontWeight: e.isActive ? "600":""
    }
  }

  const handelLogout = async()=>{
    
    const api = await axios.get("https://back-entertainment.onrender.com/user/logout") 
    // console.log(api)
    toast.success(`${api.data.message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
     auth.setIsAuthenticated(false)
     auth.setBookmarkedData([])
    setTimeout(()=>{navigate("/login")},3000)


  }

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
    
    <div className='bg-transparent flex h-[4rem] md:h-[auto] justify-center  md:sticky items-start p-2 md:p-4 lg:p-4 px-4 md:px-8 lg:px-8  lg:sticky'>
      <nav className="bg-[#364877] w-[90%] md:w-[90%] text-white  fixed z-100  flex flex-row md:flex-col md:sticky md:top-[2.5rem] md:h-[90vh] justify-between items-center p-2 md:p-4 rounded-xl my-3 md:my-0">
        {/* Logo */}
        <div className="flex items-center md:flex-col lg:flex-col">
          <MdMovie className='text-[1.5rem] text-[#FC4747]'/>
        </div>

        {/* Routes */}
        <div className="flex flex-row md:flex-col lg:flex-col  justify-between md:justify-start md:mt-0">
          <NavLink style={(e)=>handelNavColor(e)} to="/"><AiFillAppstore className='text-[1.5rem] md:text-xl mx-2 md:my-4 lg:my-4'/></NavLink>
          <NavLink style={(e)=>handelNavColor(e)} to="/movies"><MdLocalMovies className='text-[1.5rem] md:text-xl mx-2 md:my-4 lg:my-4'/></NavLink>
          <NavLink style={(e)=>handelNavColor(e)} to="/tvshows"><TbDeviceTvOld className='text-[1.5rem] md:text-xl mx-2 md:my-4 lg:my-4'/></NavLink>
          <NavLink style={(e)=>handelNavColor(e)} to="/bookmarks"><HiBookmark className='text-[1.5rem] md:text-xl mx-2 md:my-4 lg:my-4'/></NavLink>
        </div>

        {/* Profile Icon */}
        <div className='md:mt-4'>

        {/* <NavLink style={(e)=>handelNavColor(e)} to="/login"><CgProfile className='text-[1.5rem] md:text-xl'/></NavLink>
        <CgLogOut className='text-[#2a375a] text-[1.5rem] md:text-xl mt-4 hover:text-white active:text-[#FC4747]' onClick={handelLogout} /> */}
        {auth.isAuthenticated ? 
        (
          <CgLogOut className='text-[#2a375a] text-[1.5rem] md:text-xl mt-4 hover:text-white active:text-[#FC4747]' onClick={()=>handelLogout()} />
        ):
        (
          <NavLink style={(e)=>handelNavColor(e)} to="/login"><CgProfile className='text-[1.5rem] md:text-xl'/></NavLink>
        )
        }
        
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar2;

