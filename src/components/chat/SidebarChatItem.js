import React, { useContext } from 'react'
import { ChatContext } from '../../context/chat/ChatContext'
import { fetchWithToken } from '../../helpers/fetch';
import { scrollToBottom } from '../../helpers/scrollToBottom';
import { types } from '../../types/types';

export const SidebarChatItem = ({ user }) => {
 
    const { chatState, dispatch } = useContext( ChatContext );    
    const { activeChat } = chatState;

    const onClick = async() => {
        dispatch ({
            type: types.setActiveChat,
            payload: user.uid
        });
        // Load chat`s messages
        const resp = await fetchWithToken ( `messages/${ user.uid }`);

        dispatch ({
            type: types.loadingMessages,
            payload: resp.messages
        });
        
        scrollToBottom('messages');

    }
  return (
     <div 
        className={`chat_list ${ (user.uid === activeChat) && 'active_chat' } ` }
        onClick={ onClick }
    >
       

     <div className="chat_people">
         <div className="chat_img"> 
             <img src="data:image/png;base64,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" alt="sunil" />
         </div>
         <div className="chat_ib">
             <h5>{ user.name }</h5>
             {
                (user.online)
                    ? <span className="text-success">Online</span>
                    : <span className="text-danger">Offline</span>
             }
             
             
         </div>
     </div>
 </div>
  )
}
