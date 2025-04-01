import React, { useState } from 'react'
import { LuUserSearch } from "react-icons/lu";
import { useConversation } from '../../zustand/useConversation';
import { toast } from 'react-hot-toast';
import useGetConversations from '../../hooks/useGetConversations';

const SearchInput = () => {
  const [search, setSearch]=useState("");
  const{setSelectedConversation}=useConversation();
  const {conversations} = useGetConversations();
  const handleSubmit = (e) => {
   e.preventDefault();
   if(!search) return;
   if(search.length < 3) {
    return toast.error("Search term must be at least 3 characters long");
   }
  const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
  if(conversation){
    setSelectedConversation(conversation);
    setSearch("");
  }else toast.error("No such user found");
  
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
     <input type="text" placeholder='Search' className='input input-bordered rounded-full' 
     value={search}
     onChange={(e) => setSearch(e.target.value)}/> 
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
