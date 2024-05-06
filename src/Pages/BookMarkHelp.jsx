import React from 'react'
import { NavLink } from 'react-router-dom'

const BookMarkHelp = ({text}) => {
  return (
    <>
    <div className='flex flex-col w-[100%] bg-transparent'>
    {/* 1st section search section*/}
    {/* <SearchBar name="Search for Movies and TV series"/> */}

    {/* 2nd Section  */}
    <section className='flex flex-col container mx-auto py-8 my-10'>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#ccc] mb-4">No {text} Found</h1>
        <div className="flex justify-center">
            <NavLink to={"/"}>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Home</button>
            </NavLink>
        </div>
    </section>

    </div>
    </>
  )
}

export default BookMarkHelp