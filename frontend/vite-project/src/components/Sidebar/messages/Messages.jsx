import React, { useEffect, useRef } from 'react'
import Message from './Message';
import  useGetMessages  from '../../../hooks/useGetMessages';
import MessageSkeleton from '../../../../skeletons/MessageSkeleton';

const Messages = () => {
  const {loading, messages} = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behaviour: "smooth"})
    },100)
  },[messages]);
  console.log("messages", messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
     {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key = {idx}/>)}

     {!loading && messages.length === 0 && (
      <p className='text-center'>Send a message to start the conversation</p>
     )}
     {!loading && messages.length > 0 && messages.map((message) =>(
      <div
      key = {message._id}
      ref = {lastMessageRef} 
      >
        <Message message = {message} />
      </div>
     )
     )}
    </div>
  )
}

export default Messages;
/** 
 * starter code snippet.
import React from 'react'
import Message from './Message';

const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto'>
     <Message />
     <Message />
     <Message />
     <Message />
     <Message />
     <Message />
     <Message />
     <Message />
     <Message />
     <Message />
     <Message />
     <Message />
    </div>
  )
}

export default Messages;
*/
