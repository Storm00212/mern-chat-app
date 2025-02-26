import React from 'react'
import { LuUserSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
     <input type="text" placeholder='Search' className='input input-bordered rounded-full' /> 
     <button type='submit' className='btn btn-circle bg-sky-500 text-white  hover:bg-sky-600'>
         <LuUserSearch  className='w-6 h-6 outline-none'/>
     </button>
    </form>
  )
}


export default SearchInput;

/** 
 * starter code for this file.
const SearchInput = () => {
    return (
      <form className='flex items-center gap-2'>
       <input type="text" placeholder='Search' className='input input-bordered rounded-full' /> 
       <button type='submit' className='btn btn-circle bg-sky-500 text-white  hover:bg-sky-600'>
           <LuUserSearch  className='w-6 h-6 outline-none'/>
       </button>
      </form>
    )
  }
  
  
  export default SearchInput;
  */
// Compare this snippet from frontend/vite-project/src/pages/home/home.jsx:
