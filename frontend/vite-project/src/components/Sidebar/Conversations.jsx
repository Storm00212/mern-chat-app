import React from 'react'
import useGetConversations from '../../hooks/useGetConversations';
import Conversation from './Conversation';
import { getRandomEmoji } from '../../utils/emojis';
<script src="http://localhost:8097"></script>

const Conversations = () => {

  // console.log("CONVERSATIONS:",conversations);
  return (
    
      <div className='py-2 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
        
            <Conversation />
          
        
      </div>
    ) ; (
      <div className='py-2 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
        {loading && <span className='loading loading-spinner'></span>}
        {!loading && <p className='text-center'>No conversations found</p>}
      </div>
    )
}

export default Conversations;

/**
 * starter code for this file.
const Conversations = () => {
    return (
      <div className='py-2 flex flex-col overflow-auto'>
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
      </div>
    )
  }
  
  export default Conversations;
    */
