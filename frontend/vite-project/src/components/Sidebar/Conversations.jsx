
import Conversation from './Conversation';

const Conversations = () => {

  // console.log("CONVERSATIONS:",conversations);
  return (
    
      <div className='py-2 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
        
            <Conversation />
          
        
      </div>
    ) 
}

export default Conversations;

/**
 * starter code for this file.
const Conversations = () => {
    return (
      <div className='py-2 flex flex-col overflow-auto'>
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
      </div>
    )
  }
  
  export default Conversations;
    */
