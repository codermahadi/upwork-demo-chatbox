import React, { useEffect, useState } from 'react';
import FormComp from './components/form.comp';
import { Chatbox } from './styles/chatbox.styled';
import { Container } from './styles/containner.styled';
import GlobalStyle from './styles/global.styles';
import { Grid } from './styles/grid.styled';
import { H1 } from './styles/H1.styled';
import { Main } from './styles/main.styled';
import { MessageArea, Message, UserName, MessageBody } from './styles/message.styled';
function App() {

  const [name, setName] = useState<string | null>(null);
  useEffect(()=>{

    let userName = name === null && window.prompt('Enter your name');
    userName && setName(userName);
    userName !== null && localStorage.setItem(userName || "", JSON.stringify({name: userName}))
  }, []);
  return (
    <div>
      <GlobalStyle />
      <Main>
      <H1>Swanky Chatbox UI With React</H1>
        <Container>
          <Grid col={12}>
            <Chatbox>
                <MessageArea>
                  <Message float='right'>
                      <UserName float='right'>{name}</UserName>
                      <MessageBody>Message body</MessageBody>
                  </Message>

                  <Message float='left'>
                      <UserName float='left'>mahadi</UserName>
                      <MessageBody>Message body</MessageBody>
                  </Message>
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
