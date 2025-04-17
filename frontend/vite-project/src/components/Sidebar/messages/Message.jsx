import { useAuthContext } from '../../../context/AuthContext';
import { useConversation } from '../../../zustand/useConversation';
import { extractTime } from '../../../utils/extractTime';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const shakeClass = message.shouldShake ? 'shake' : ''; // Add shake class if shouldShake is true

  // Ensure createdAt is valid, fallback to current time if undefined
  const formattedTime = message.createdAt ? extractTime(message.createdAt) : extractTime(new Date().toISOString());

  const chatClassName = !fromMe ? 'chat-start' : 'chat-end';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-700';

  // Debugging: Log message updates
  useEffect(() => {
    console.log('Message updated:', message);
  }, [message]);

  return (
    <div className={`chat ${chatClassName}`} key={message._id}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt="Tailwind CSS chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex-gap-1 items-center'>{formattedTime}</div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    senderId: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default Message;
