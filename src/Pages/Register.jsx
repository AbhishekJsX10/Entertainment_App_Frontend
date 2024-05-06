import axios from "axios";
import React, { useContext, useState } from "react"
import { FaHandPeace } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Context from "../context/Context"





const Register = () =>{

  const navigate = useNavigate()

const auth = useContext(Context)

const [username, setUserName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handelSubmit = async(e) =>{
  e.preventDefault()
  try{
    const api = await axios.post("https://back-entertainment.onrender.com/user/register",{name:username,email,password})
    console.log(api)

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

      auth.setIsAuthenticated(true)
      setTimeout(()=>{navigate("/")},3000)
  }
  catch(error){
    console.error(error)
    toast.error(`${error.response.data.message}`, {
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
  }
}



    return(
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

    <div className="container mx-auto px-4 py-7 md:py-10 min-h-screen flex flex-col items-center justify-start md:justify-center">
      <h1 className="text-3xl font-bold text-center mb-4"><MdMovie className="text-[#FC4747]"/></h1>
      <form className="w-full max-w-md bg-[#161D2F] shadow-md rounded-lg px-8 py-6 md:max-w-lg lg:max-w-xl" onSubmit={(e)=>handelSubmit(e)}>
            <h2 className="text-lg md:text-xl font-semibold mb-7">Register</h2>
            {/* <!-- Email Address Input --> */}
            <div className="mb-3">
                <label htmlFor="email" className="block mb-1 text-lg">Email Address</label>
                {/* <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border-b-2 border-gray-300 focus:border-white transition-colors duration-300"/> */}
                <input onChange={(e)=>setEmail(e.target.value)} value={email}
            type="email" id="email" name="email" placeholder="Enter your email"
            className="border-b-2 mt-1 text-[#ccc] outline-none bg-transparent border-[#0c101c] focus:border-white transition-all duration-500 w-full py-2 px-3"
          />
            </div>
            {/* <!-- UserName Input --> */}
            <div className="mb-3">
                <label htmlFor="username" className="block mb-1 text-lg">UserName</label>
                {/* <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border-b-2 border-gray-300 focus:border-white transition-colors duration-300"/> */}
                <input onChange={(e)=>setUserName(e.target.value)} value={username}
            type="text" id="username" name="username" placeholder="Enter your username"
            className="border-b-2 mt-1 text-[#ccc] outline-none bg-transparent border-[#0c101c] focus:border-white transition-all duration-500 w-full py-2 px-3"
          />
            </div>
            {/* <!-- Password Input --> */}
            <div className="mb-5">
                <label htmlFor="password" className="block mb-1 text-lg">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password}
             type="password" id="password" name="password" placeholder="Enter your password"
            className="border-b-2 mt-1 text-[#ccc] outline-none bg-transparent border-[#0c101c] focus:border-white transition-all duration-500 w-full py-2 px-3"
          />
            </div>
            {/* <!-- Create Account Button --> */}
            <button className="w-full bg-[#FC4747] text-white py-2 px-4 rounded-md mb-4 hover:bg-red-700 transition-colors duration-300">Create Account</button>
            {/* <!-- Already have an account? Login --> */}
            <div className="text-center">
                <p>Already have an account? <NavLink to="/login" className="text-[#FC4747]">Login</NavLink></p>
            </div>
      </form> 
    </div>
    </>
    )
}
export default Register;