import { use, useState } from "react";
import Message from "./Message";

export default function MessageList() {

    const [messsages, setMessages] =useState([
        {id: 1, text: 'mensagem 1'},
        {id: 2, text: 'mensagem 2'},
        {id: 3, text: 'mensagem 3'}])

        const handleDimiss = (id) => {
            setMessages(messsages.filter(messsage => messsage.id !== id))
        }

    return (

        <div>
            <h2>Lista de Mensagens</h2>

            {messsages.map(messsage => (
                <Message
                key={Message.id}
                text={messsage.text}
                onDismiss={() => {handleDimiss(messsage.id)}}
                />
            ))}
            
        </div>

    )


}