import React, { useCallback, useState } from "react";
import { IMessageBody } from "../interfaces/IMessageBody";

const useForm = () => {
    const [message, setMessage] = useState<IMessageBody>({})
    const [messageItems, setMessageItem] = useState<IMessageBody[]>([]);

    const formHandle = useCallback( (event)=>{
        event.preventDefault();
        setMessageItem(messageItems.concat([message]));
        store(message);
        },[]);

        // store messages
        const store = async (body: IMessageBody) =>{
            await localStorage.setItem('message', JSON.stringify(messageItems));
        }

        /**
         * Handle Meesaage
         */
    const handleChange = useCallback((value: string)=>{
        setMessage({
            to: 'mahadi',
            from: 'hasan',
            message: value,
            dateAndTime: new Date()
        });
    },[])
    return {message, formHandle, handleChange, messageItems}
}

export {useForm};