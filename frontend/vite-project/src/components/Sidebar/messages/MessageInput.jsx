import React from 'react';
import { GrSend } from "react-icons/gr";
import { useState } from 'react';
import  useSendMessage  from '../../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(message.trim() === '') return;
    await sendMessage(message);
    setMessage('');
  }
  return (
    <form className='px-4 my-3'  onSubmit={handleSubmit}>
      <div className=' relative w-full '>
     <input type="text" 
     className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
     placeholder='Send a message'
     value={message}
     onChange={(e)=> setMessage(e.target.value)}/>
     <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
     {loading?<div className='loading loading-spinner'></div> : <GrSend />}
     </button>
      </div>
    </form>
  )
}

export default MessageInput;

/** 
 * starter code snippet
import React from 'react';
import { GrSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className=' relative w-full '>
     <input type="text" 
     className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
     placeholder='Send a message'/>
     <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
     <GrSend />
     </button>
      </div>
    </form>
  )
}

export default MessageInput;
*/
