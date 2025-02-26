import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import MessageContainer from '../../components/Sidebar/messages/MessageContainer';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-red-0 bg-clip-padding
    backdrop-filter backdrop-blur-sm  bg-opacity-0'>
     <Sidebar />
     <MessageContainer /> 
    </div>
  )
}

export default Home;
