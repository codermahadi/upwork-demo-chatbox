import styled from "styled-components";

const MessageArea = styled.div`
    height: 70%;
`;

type MessageProps = {
    float?: string;
}

const Message = styled.div<MessageProps>`
width: 50%;
float: ${props=>props.float ? props.float : 'right'};
margin-right: 3%;
margin-left: 3%;
`

const UserName = styled.p<MessageProps>`
    color: #333;
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    text-align: ${props=>props.float ? props.float : 'right'};
    text-transform: capitalize;
`;

const MessageBody = styled.div`
    background-color: #eee;
    padding: 10px;
    border-radius: 5px;
    color: #333;
    box-shadow: 0 1px 5px #333;
    font-size: 0.9rem;
`

export {MessageArea, Message, UserName, MessageBody};