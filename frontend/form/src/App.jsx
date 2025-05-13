import { useEffect } from 'react';
import { useState } from 'react';
import{useForm}from 'react-hook-form';
import { FaHandHoldingHeart } from "react-icons/fa";
function App() {
const{register,handleSubmit,reset,formState:{errors,isDirty,isSubmitted,isSubmitSuccessful,isSubmitting}}=useForm();
  console.log(isSubmitting,isSubmitSuccessful,isSubmitted);
  
  const[formshow,setformshow]=useState(true);

  useEffect(()=>{
    if(isSubmitSuccessful){
         setformshow(false) 
    }
  //form successa summit akidendal forma hide akidu mesgea kaduvam
    },[isSubmitSuccessful])

  return (
    <div className=" flex bg-blue-200 h-screen justify-center items-center">
    {
      formshow?<form  onSubmit={handleSubmit((data)=>{
          console.log(data);
            reset();
      })}>
<div className="bg-blue-400 p-4 text-xl font-extrabold text-blue-800 rounded-4xl">
  <p className="text-4xl text-center pb-3 font-serif "> Student Registration Form</p>
     <div  className=" flex justify-around border-1 p-1.5 rounded-2xl bg-white mt-2 active:outline-4  outline-blue-300">FirstName:- <input {...register('fname',{required:"* FirstName Field is Required."})} type="text"placeholder='Enter Your FirstName' className="border-2 border-blue-900 outline-0 rounded-md ps-1  w-full ms-4 focus:outline-2 outline-blue-400 text-lg italic text-black"  /></div>
     {errors?.fname&&<p className='text-red-600 text-xs font-medium ps-4 mb-2'>{errors.fname.message}</p>}
     <div  className=" flex justify-around border-1 p-1.5 rounded-2xl bg-white mt-2 active:outline-4  outline-blue-300"> LastName:- <input {...register('lname',{required:"* LastName Field is Required."})} type="text"placeholder=' Enter Your LastName' className="border-2 border-blue-900 outline-0 rounded-md ps-1 w-full ms-4 focus:outline-2 outline-blue-400 text-lg italic text-black"  /></div>
     {errors?.lname&&<p className='text-red-600 text-xs font-medium ps-4 mb-2'>{errors.lname.message}</p>} 
     <div className=" flex justify-around border-1 p-1.5 rounded-2xl bg-white mt-2 active:outline-4  outline-blue-300 ">  Email:- <input {...register('email',{required:"* Email Field is Required.",})} type="text" placeholder='Enter Your EmailAddress' className="border-2 border-blue-900 outline-0 rounded-md ps-1 w-full ms-4 focus:outline-2 outline-blue-400 text-lg italic text-black" /></div>
     {errors?.email&&<p className='text-red-600 text-xs font-medium ps-4 mb-2'>{errors.email.message}</p>}
     <div  className=" flex justify-around border-1 p-1.5 rounded-2xl bg-white mt-2 active:outline-4  outline-blue-300"> Password:- <input {...register('password',{required:"* PassWord Field is Required.",maxLength:{value:10,message:'Maximun Length is 10 Characters'}})} type="text"placeholder='Enter Your Email Password'  className="border-2 border-blue-900 outline-0 rounded-md ps-1  w-full ms-4 focus:outline-2 outline-blue-400 text-lg italic text-black" /></div>
     {errors?.password&&<p className='text-red-600 text-xs font-medium ps-4 mb-2'>{errors.password.message}</p>}
     <div  className=" flex justify-around border-1 p-1.5 rounded-2xl bg-white mt-2 active:outline-4  outline-blue-300">  ContactNumber:- <input {...register('phone',{required:"* ContactNumber Field is Required.",maxLength:{value:10,message:"Contact Number Doesnot Exceed 10 Characters."},minLength:{value:10,message:"Contact Number Doesnot Conatain Lessthan 10 Characters"}})} type="text" placeholder='Enter Your Contactumber' className="border-2 border-blue-900 outline-0 rounded-md ps-1  w-full ms-4 focus:outline-2 outline-blue-400 text-lg italic text-black" /></div>
     {errors?.phone&&<p className='text-red-600 text-xs font-medium ps-4 mb-2'>{errors.phone.message}</p>}  
       <div  className="flex justify-evenly pt-6 text-white "> 
         <div> <input type="submit" value='Submit' disabled={ !isDirty} className="border-2 bg-green-500 rounded-3xl p-2 hover:cursor-pointer hover:text-black hover:bg-green-300"/></div>
          <div><input type="button" onClick={()=>{reset()}} value='Reset' className="border-2 bg-red-500 rounded-3xl p-2 hover:cursor-pointer hover:text-black hover:bg-red-300"/></div>
      </div>
  </div>
    </form>: <h1 className='bg-gray-500 p-20 font-extrabold border-2 rounded-4xl text-center shadow-2xl shadow-black-400  text-3xl '><div className='flex justify-center '>{<FaHandHoldingHeart  className='text-red-400 animate-[bounce_3S_ease-in-out_infinite]   w-[300px] h-[200px] pb-4' />}</div><p className='text-white'>Form is SuccessFully Submitted..</p><button onClick={()=>{setformshow(true)}} className='text-xs underline text-black pt-2 hover:cursor-pointer'>Do You Want to another response</button></h1>

    }  

    
    </div>
  )
}

export default App
