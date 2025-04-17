import toast from 'daisyui/components/toast';

import { useState } from 'react';
import { useConversation } from '../zustand/useConversation';
import { useEffect } from 'react';

const useGetMessages = () => {
    const [loading, setloading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setloading(true);
            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}`);
                if (!res.ok) {
                    throw new Error(`Failed to fetch messages: ${res.statusText}`);
                }
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setMessages(data);
            } catch (error) {
                if (error.message.includes('Failed to fetch') || error.message.includes('ECONNREFUSED')) {
                    console.error('Connection error:', error);
                    toast.error('Unable to connect to the server. Please check your network or try again later.');
                } else {
                    console.error('Error fetching messages:', error);
                    toast.error('Failed to fetch messages. Please try again later.');
                }
            } finally {
                setloading(false);
            }
        };
        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]); // eslint-disable-line react-hooks/exhaustive-deps

    return { loading, messages };
};

export default useGetMessages;
