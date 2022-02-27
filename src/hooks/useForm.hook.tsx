import React, { useCallback, useState } from "react";

interface MesssageType {
    to?: string;
    from?: string;
    message?: string
    dateAndTime?: string
}

const useForm = () => {
    const [message, setMessage] = useState<string>("")
    const [messageItems, setMessageItem] = useState<string[]>([]);

    const formHandle = useCallback(async (event)=>{
        event.preventDefault();
        await setMessageItem(messageItems.concat([message]));
        console.log(messageItems, message)
        await localStorage.setItem('message', JSON.stringify(messageItems))
        },[message]);
    const handleChange = useCallback((value: string)=>{
        setMessage(value);
    },[])
    return {message, formHandle, handleChange}
}

export {useForm};