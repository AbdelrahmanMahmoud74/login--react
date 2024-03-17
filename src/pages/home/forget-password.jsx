import React from "react";
import blogimg from './img home/DrawKit Vector Illustration Project Manager (10) 1.png'
import { Link } from "react-router-dom";

const forget =()=>{
    return(
        <>
<div className="flex flex-col bg-gradient-to-b from-purple-700 to-pink-500 h-screen w-1/3	rounded-xl ">
        <h1 className="text-2xl font-semibold text-white ml-10 pt-6">LOGO</h1>
        <img className='w-full h-96 ml-4 mt-20' src={blogimg} title="blog img"></img>
        </div>
        <div className="flex flex-col  ml-auto mr-80 w-96 -mt-96 font-sans ">
      <h1 className=" w-96  text-3xl -ml-5 font-medium -mt-32">Forget Password</h1>
      <label htmlFor="number" className="text-sm font-medium mt-20 ">Phone number</label>
        <input type="number" id="number"placeholder='Enter Your Phone number' className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        <button className="m-auto mt-14 bg-buttons text-white w-48 h-10 rounded-md "><Link to="/resend">Resend recovery code </Link></button>
      </div>
      
        </>
        )
        }
        export default forget;