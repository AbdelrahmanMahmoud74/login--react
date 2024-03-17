import React from "react";
import blogimg from './img home/d6a328715a05ba0df8a847ee86747f66.png'
import { Link } from "react-router-dom";

const Home =()=>{
    return(
    <>
<div className="flex flex-col bg-gradient-to-b from-purpl to-blu h-screen w-1/3 rounded-xl">
    <h1 className="text-2xl font-semibold text-white ml-10 pt-6">LOGO</h1>
    <img className='w-96 h-52 mt-28 ml-56' src={blogimg} title="blog img"></img>
    <br>
      </br><br></br><br></br><br></br><br></br><br></br>
      <h2 className='text-white  mt-20 ml-24 font-serif text-xl' >"Ship smarter, ship faster"</h2>
        </div>
        <div className="flex flex-col  ml-auto mr-40 w-96 -mt-96 font-sans ">
      <h1 className="text-2xl font-semibold ml-5 -mt-20">Company name</h1>
      <p className=" text-gray-600  w-70 -ml-10">Deliver,organize and get things done</p>
      <p className=" text-gray-600 ml-5">with your shipments</p>
      <button className="mr-40 mt-5 bg-buttons text-white w-70 h-10 rounded-md  "><Link to="/login">Sign in </Link></button>
      <button className="mr-40 mt-5 bg-buttons text-white w-70 h-10 rounded-md">Create new account</button>
      </div>

        </>
       

    )
}
export default Home;