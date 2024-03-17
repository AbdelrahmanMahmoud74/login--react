import React , { useRef, useState }from "react";
import blogimg from './img home/DrawKit Vector Illustration Project Manager (10) 1.png'
import { Link } from "react-router-dom";
import { keys } from "localforage";







const resend =()=>{
    const inputRef= useRef({})
    const [otp,setOtp]=useState({
        digitOne:"",
        digitTwo:"",
        digitThree:"",
        digitFour:"",
        digitFive:"",
        digitSix:"",

    });
    const handleChange =(event)=>{
        const {name,value}=event.target;
        setOtp(prev=>({
            ...prev,
            [name]:value,
        }));
        event.target.nextSibling.focus();

    };
    console.log(otp);
    const renderInput =()=> {
        return Object.keys(otp).map((keys,index)=>(
<input ref={element=>inputRef.current[index]=element} maxLength={1} type="text" name={keys} className="w-12 h-12 rounded-md mr-3 text-center text-xl border-2 border-gray-200 "
        onChange={handleChange}
        />
        ))
      

    }
   
    return(
        <>
<div className="flex flex-col bg-gradient-to-b from-purple-700 to-pink-500 h-screen w-1/3	rounded-xl ">
        <h1 className="text-2xl font-semibold text-white ml-10 pt-6">LOGO</h1>
        <img className='w-full h-96 ml-4 mt-20' src={blogimg} title="blog img"></img>
        </div>
        <div className="flex flex-col  ml-auto mr-80 w-96 -mt-96 font-sans ">
      <h1 className=" w-96  text-3xl -ml-5 font-medium -mt-32">Check your phone</h1>
      <p className="-ml-5 text-gray-600">We're sent the code to your phone</p>
      <label htmlFor="number" className="text-sm font-medium mt-20 ">Enter the 6 digit</label>
<div className="mt-5">
    {
        renderInput()

    }
  

</div>
<div className="mt-10 ml-24">
    <button className="bg-buttons w-40 h-10 text-white rounded-xl">Verify</button>
    <button className="bg-white border-2 mt-5 border-buttons text-buttons w-40 h-10 text-buttons rounded-xl">Send again</button>
</div>
      </div>
       
        </>
    )
    
    }

export default resend ; 