import { useSocketContext } from '../context/SocketContext'; // Correct import
import { useConversation } from '../zustand/useConversation';
import { useEffect } from 'react';
import notificationSound from '../assets/sounds/notification.mp3'; // Correct relative import

const useListenMessages = () => {
  const { socket } = useSocketContext(); // Access the socket from context
  const { messages, setMessages } = useConversation(); // Access messages and setter from Zustand

  useEffect(() => {
    // Listen for new messages
    socket?.on('newMessage', (newMessage) => {
      newMessage.shouldShake = true; // Add the shouldShake property to the new message

      // Play notification sound
      const audio = new Audio(notificationSound); // Use the imported file
      audio.play().catch((error) => {
        console.error('Failed to play notification sound:', error);
      });

      setMessages([...messages, newMessage]); // Add the new message to the existing messages
      console.log('New message received:', newMessage);
    });

    // Cleanup the event listener on unmount
    return () => {
      socket?.off('newMessage');
    };
  }, [socket, messages, setMessages]); // Dependencies

  return null; // This hook does not return anything
};

export default useListenMessages;
