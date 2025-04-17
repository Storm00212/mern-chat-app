import { useEffect, useState } from 'react';
import { getRandomEmoji } from '../../utils/emojis';
import { useConversation } from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = () => {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null); // Add state for error handling
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { onlineUsers } = useSocketContext();

    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await fetch('/api/users');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setMessages(data);
            } catch (err) {
                console.error(err);
                setError('Failed to load conversations. Please try again later.');
            }
        };
        getdata();
    }, []);

    if (error) {
        return <div className="text-red-500">{error}</div>; // Display error message
    }

    return (
        <>
            {messages.map((message, index) => {
                let isSelected = selectedConversation?._id === message._id;
                const isOnline = onlineUsers?.includes(String(message._id));
                return (
                    <div
                        key={message._id}
                        className={`flex items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
                            isSelected ? 'bg-sky-00' : ''
                        }`}
                        onClick={() => setSelectedConversation(message)}
                    >
                        <div className={`avatar ${isOnline ? 'avatar-online' : ''}`}>
                            <div className="w-12 h-12 rounded-full">
                                <img key={index} src={message.profilePic} alt="profilepicture" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex gap-3 justify-between">
                                <p key={index} className="ml-2 font-bold text-gray-200">
                                    {message.fullName}
                                </p>
                                <span className="text-xl"></span>
                                <div className="flex gap-2">
                                    <span className="text-xl" key={index}>
                                        {getRandomEmoji()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Conversation;
