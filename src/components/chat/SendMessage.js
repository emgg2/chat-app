import React, { useState, useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { ChatContext } from '../../context/chat/ChatContext';
import { SocketContext } from '../../context/SocketContext';

export const SendMessage = () => {

    const [message, setMessage] = useState('');
    const { socket } = useContext(SocketContext);
    const { auth } = useContext(AuthContext);
    const { chatState } = useContext(ChatContext);

    const onChange = ({ target }) => {
        setMessage(target.value);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        if ( message.length === 0 ) { return; }
        setMessage('');

        // TODO emitir un evento de socket para enviar el mensaje
        /*{
            from: //UID del usuario enviando el mensaje
            to: // UID del usuario que recibe el mensaje
            mensaje: // mensaje
        }*/
        socket.emit('personal-message', {
            from: auth.uid,
            to: chatState.activeChat  , 
            message
        })

        //TODO hacer el dispatch el mensaje
    }

  return (
        <form onSubmit={ onSubmit }>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input 
                        type="text" 
                        className="write_msg" 
                        placeholder="Mensaje..." 
                        value={ message }
                        onChange={ onChange }
                    />
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                </div>
            </div>
        </form>
  )
}
