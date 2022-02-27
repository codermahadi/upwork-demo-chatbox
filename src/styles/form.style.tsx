import styled from "styled-components";

const FormStyled = styled.form`
    width: 100%;
    position: relative;
    bottom: 0;
    & input{
        background-color: #888;
        width: 75%;
        border: none;
        padding: 5px;
        height: 30px;
        margin-left: 3%;
        border-radius: 5px;
    }

    & button{
        width: 19%;
        border: none;
        padding: 5px;
        height: 30px;
        margin-right: 3%;
        border-radius: 5px;
        cursor: pointer;
        
    }
`;

export {FormStyled};