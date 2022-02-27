import React, {FC} from "react";
import { useForm } from "../hooks/useForm.hook";
import { FormStyled } from "../styles/form.style";

const FormComp = () =>{
    const {message, formHandle, handleChange } = useForm();
    return(
    <FormStyled onSubmit={formHandle}>
        <input type="text" placeholder="Enter your message" onChange={e => handleChange(e.target.value)} />
        <button type="submit">Send</button>
    </FormStyled>
    )
};

export default FormComp;