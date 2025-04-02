import React from 'react'
import useGetConversations from '../../hooks/useGetConversations';
import Conversation from './Conversation';

const Conversations = () => {
  const {loading, conversations}=useGetConversations();
  // console.log("CONVERSATIONS:",conversations);
  return (
    <div className='py-2 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
      {loading && <span className='loading loading-spinner'></span>}
      

      {!loading && conversations.map((conversation) => (
        <Conversation key={conversation.id} {...conversation} />
      ))}
    </div>
  )
}

export default Conversations;

