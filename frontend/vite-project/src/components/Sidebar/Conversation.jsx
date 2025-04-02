import React, { useEffect, useState } from 'react';
import { getRandomEmoji } from '../../utils/emojis';
import { useConversation } from '../../zustand/useConversation';


const Conversation = () => {
    const[messages,setMessages]=useState([]);
    const {selectedConversation, setSelectedConversation} = useConversation();
    

     useEffect(()=>{
        const getdata=async ()=>{
            fetch('/api/users')
            .then(res=>res.json())
            .catch(erro=>console.log(erro))
            .then(data=>setMessages(data))
        }
        getdata();
        
    },[]) 
console.log(messages);

  return (<>
   {/**<div className='py-2 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200'>*/}
  {messages.map((message,index)=>{
           let isSelected = selectedConversation?._id===message._id;

           return(
            <div key={message._id}
            className={`flex items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
            ${isSelected ? 'bg-sky-00' : ''}`}  onClick={()=>setSelectedConversation(message)}
            > 
            <div className='avatar online'>
                <div className='w-12 h-12 rounded-full'>
                    <img  key={index} src={message.profilePic} alt="profilepicture" />
                </div>
               </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p key={index} className=' ml-2 font-bold text-gray-200'>{message.fullName}</p>
                    <span className='text-xl'></span>
                    <div className='flex gap-2'>
                        <span className='text-xl' key={index}>{getRandomEmoji()}</span>
                    </div>
                </div>
            </div>
            
                </div> 
  )
            }
                )
                }
   {/**</div>*/} 
    {/* {!lastIndex && <div className='divider my-0 py-0 h-1'></div>} */}
    </> 
  )

}

export default Conversation;

/**
 * starter code for this file.
const Conversation = () => {
    return (<>
      <div className='flex items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'> 
          <div className='avatar online'>
              <div className='w-12 h-12 rounded-full'>
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar"/>
              </div>
             </div>
          <div className='flex flex-col flex-1'>
              <div className='flex gap-3 justify-between'>
                  <p className='font-bold text-gray-200'>John Doe</p>
                  <span className='text-xl'>🎃</span>
              </div>
          </div>
              </div> 
      
      <div className='divider my-0 py-0 h-1'></div>
      </> 
    )
  }
  
  export default Conversation;
    */
