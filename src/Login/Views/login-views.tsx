import React from 'react';
import NavApp from '../../shared/models/views/navbar';
import ButtonGmail from '../components/button-gmail';
import { PageContainer, MainContainer, Title, Subtitle, StyledLogo } from './style';
import { Link } from 'react-router-dom';

interface Props{
    sendAuthCode: any;
}

export default function LoginView(props: Props ) {

  return (
        <PageContainer>
            <NavApp />
            <MainContainer>
                <Title>Todo List</Title>
                <Subtitle>Organize suas tarefas
                    <hr></hr>
                </Subtitle>
                <StyledLogo src="https://raw.githubusercontent.com/mustafaynk/todolist/master/appgallery/logo.png" alt="Logo" />
                <ButtonGmail sendAuthCode={props.sendAuthCode}/>
            </MainContainer>
        </PageContainer>
          
  );
}

