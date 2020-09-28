import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoimg from '../../assets/logo.svg';

import { Container, Background, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoimg} alt="Go Barber" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="login">
          <FiLogIn />
          Criar conta
        </a> 
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
