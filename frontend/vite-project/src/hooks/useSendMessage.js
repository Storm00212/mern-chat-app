// File: src/hooks/useSendMessage.js
import { useState } from 'react';
import { useConversation } from '../zustand/useConversation';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/messages/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return data; // Return the newly sent message
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
