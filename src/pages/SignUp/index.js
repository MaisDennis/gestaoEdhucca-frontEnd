import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.png'
import { signUpRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';
export default function SignUp() {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().min(6,'No mínimo 6 caracteres.').required('A senha é obrigatorória'),
  });

  function handleSubmit(data) {
    dispatch(signUpRequest(data.name, data.email, data.password));
    console.tron.log(data)
  }

  return (
  <>
    <div>
      <img src={logo} alt="GoBarber"/>
    </div>
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name= "name" placeholder="Nome completo" />
      <Input name= "email" type="email" placeholder="Seu e-mail" />
      <Input name="password" type="password" placeholder="Sua senha secreta" />
      <button type="submit">Criar conta</button>
      <Link to="/">Já tenho login</ Link>
    </Form>
  </>
  );
}
