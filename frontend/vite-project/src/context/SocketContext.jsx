import { createContext, useContext, useState, useEffect } from 'react';
import { useAuthContext } from './AuthContext'; // Assuming you have an AuthContext to get the user
import PropTypes from 'prop-types'; // Assuming you have a ConversationContext to manage conversations
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const {authUser} = useAuthContext(); // Assuming you have an AuthContext to get the user
   // Replace with your server URL

  useEffect(() => {
    if (authUser) {
      const socket = io('https://mern-chat-app-er70.onrender.com', {
        query: { userId: authUser._id }, // Pass user ID as a query parameter
      });

      setSocket(socket);

      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users); // Update online users state
      });

      return () => socket.close(); // Cleanup on unmount
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]); // Add authUser as dependencies

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

SocketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};