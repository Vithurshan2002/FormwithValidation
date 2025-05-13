function App() {
  return (
    <div className=" flex bg-blue-200 h-screen justify-center items-center transition-all">
<div className="bg-blue-400 p-4 text-xl font-extrabold text-blue-800 rounded-4xl">
  <p className="text-4xl text-center pb-3 font-serif "> Student Registration Form</p>
     <div className=" flex justify-around border-1 p-1.5 rounded-2xl bg-white mt-2 active:outline-4  outline-blue-300 "> FirstName:- <input type="text" className="border-2 border-blue-900 outline-0 rounded-md ps-1 w-full ms-4 focus:outline-2 outline-blue-400" /></div>
     <div  className=" flex justify-around border-1 p-1.5 rounded-2xl bg-white mt-2 active:outline-4  outline-blue-300"> LastNmae:- <input type="text" className="border-2 border-blue-900 outline-0 rounded-md ps-1  w-full ms-4 focus:outline-2 outline-blue-400"  /></div>
     <div  className=" flex justify-around border-1 p-1.5 rounded-2xl bg-white mt-2 active:outline-4  outline-blue-300"> Email:- <input type="text" className="border-2 border-blue-900 outline-0 rounded-md ps-1 w-full ms-4 focus:outline-2 outline-blue-400"  /></div>
     <div  className=" flex justify-around border-1 p-1.5 rounded-2xl bg-white mt-2 active:outline-4  outline-blue-300"> Password:- <input type="text"  className="border-2 border-blue-900 outline-0 rounded-md ps-1  w-full ms-4 focus:outline-2 outline-blue-400" /></div>
     <div  className=" flex justify-around border-1 p-1.5 rounded-2xl bg-white mt-2 active:outline-4  outline-blue-300">  ContactNumber:- <input type="text"  className="border-2 border-blue-900 outline-0 rounded-md ps-1  w-full ms-4 focus:outline-2 outline-blue-400" /></div>
       <div  className="flex justify-evenly pt-6 text-white "> 
         <div> <input type="submit" value='Submit' className="border-2 bg-green-500 rounded-3xl p-2 hover:cursor-pointer hover:text-black hover:bg-green-300"/></div>
          <div><input type="reset" value='Reset' className="border-2 bg-red-500 rounded-3xl p-2 hover:cursor-pointer hover:text-black hover:bg-red-300"/></div>
      </div>
    
  </div>
    </div>
  )
}

export default App
