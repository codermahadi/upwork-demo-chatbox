import React, { useEffect, useState } from 'react';
import FormComp from './components/form.comp';
import { useForm } from './hooks/useForm.hook';
import { IMessageBody } from './interfaces/IMessageBody';
import { Chatbox } from './styles/chatbox.styled';
import { Container } from './styles/containner.styled';
import GlobalStyle from './styles/global.styles';
import { Grid } from './styles/grid.styled';
import { H1 } from './styles/H1.styled';
import { Main } from './styles/main.styled';
import { MessageArea, Message, UserName, MessageBody } from './styles/message.styled';
function App() {
  const [messageItems, setMessageItem] = useState<IMessageBody[]>([]);
  const [name, setName] = useState<string | null>(null);
  useEffect(()=>{
    let userName = name === null && window.prompt('Enter your name');
    userName && setName(userName);
    userName !== null && localStorage.setItem(userName || "", JSON.stringify({name: userName}))
  }, []);

  useEffect(() =>{

    setTimeout(() =>{
      getMessageFromLocalStorage();
    }, 2000)

    return () => {
      clearTimeout()
    }
  },[])

  const getMessageFromLocalStorage = () => {
    let x: string|null = localStorage.getItem('message');
    console.log(x)
    x !== null && setMessageItem(JSON.parse(x))
  }
  return (
    <div>
      <GlobalStyle />
      <Main>
      <H1>Swanky Chatbox UI With React</H1>
        <Container>
          <Grid col={12}>
            <Chatbox>
                <MessageArea>
                  {messageItems.length > 0 && messageItems.map((item: IMessageBody, i: number) => 
                      <Message key={i} float={name === item.from ? 'right':'left'}>
                          <UserName float={name === item.from ? 'right':'left'}>{name === item.from ? item.from:item.to}</UserName>
                          <MessageBody>{item.message}</MessageBody>
                      </Message>
                  )}
                </MessageArea>

                <FormComp />
            </Chatbox>
          </Grid>
        </Container>
      </Main>
    </div>
  );
}

export default App;
