import React from "react";
import blogimg from './img home/d6a328715a05ba0df8a847ee86747f66.png'
import { Link } from "react-router-dom";
const login =()=>{
    return(
        <>
<div className="flex flex-col bg-gradient-to-b from-purple-700 to-pink-500 h-screen w-1/3	rounded-xl ">
        <h1 className="text-2xl font-semibold text-white ml-10 pt-6">LOGO</h1>
        <img className='w-96 h-52 mt-28 ml-64' src={blogimg} title="blog img"></img>
      <br>
      </br><br></br><br></br><br></br><br></br><br></br>
        <h2 className='text-white font-bold mt-20 ml-24 font-serif text-xl' >"Ship smarter, ship faster"</h2>
        </div>
        <div className="flex flex-col  ml-auto mr-80 w-96 -mt-96 font-sans ">
      <h1 className="text-xl font-bold ml-0 -mt-28">Sign in</h1>
      <p className='ml-1 text-gray-400'>Sign in if you an account in here</p>
      <div className="flex flex-col">
        <br></br>
        <label htmlFor="email" className="text-sm font-medium">Your email</label>
        <input type="email" id="email"placeholder='Enter Your email' className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
      </div>
      <br></br>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-medium">Password</label>
        <input type="password" id="password"placeholder='Enter Your password' className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 " />
      </div>
      <div className="flex flex-row justify-between items-center">
        <a href="#" className="w-40 -mt-20 text-sm text-gray-600 hover:underline"><Link to ="/forget">Forgot Password? </Link></a>
        <button type="submit" className="w-40 mt-20 mr-36 px-3 py-2 rounded-md bg-buttons text-white font-medium hover:bg-blue-700">Sign In</button>
      </div>
      <br></br>
      <p className="text-sm text-center text-gray-500">Not a member? <a href="#" className="text-black underline">Sign Up</a></p>
    </div>

        </>
    )
}
export default login;