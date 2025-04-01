import toast from 'daisyui/components/toast';
import React from 'react'
import { useState } from 'react'
import { useConversation } from '../zustand/useConversation';
import { useEffect } from 'react';

const useGetMessages = () => {
    const [loading, setloading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    useEffect(() => {
    const getMessages = async () => {
        setloading(true);
        try {
          const res = await fetch(`/api/messages/${selectedConversation._id}`); 
          const data = await res.json();
          if (data.error) {
            throw new Error(data.error);
          }
            if (!res.ok) {
                throw new Error(`Network response was not ok ${error}`);
            }
            setMessages(data); 
        } catch (error) {
          toast.error(error.message);  
        }
        finally {
            setloading(false);
        }
    }
    if (selectedConversation?._id) getMessages();

    },[selectedConversation?._id, setMessages]); // eslint-disable-line react-hooks/exhaustive-deps

    return {loading, messages};
}

export default useGetMessages;
