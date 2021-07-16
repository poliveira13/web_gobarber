import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import logoimg from '../../assets/logo.svg';

import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Background, Content } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object) {
    console.log('aaaaa');
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoimg} alt="Go Barber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
