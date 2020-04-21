import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input} from '@rocketseat/unform';
import logo from '~/assets/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  Yup.object().shape({
    email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().min(6,'No mínimo 6 caracteres.').required('A senha é obrigatorória'),
  });

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    dispatch(signInRequest(data.email, data.password));
  }

  return (
  <>
    <div>
      <img src={logo} alt="Edhucca"/>
    </div>

    <Form  onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="Seu e-mail" />
      <Input name="password" type="password" placeholder="Sua senha secreta" />
      <button type="submit">{ loading ? 'Carregando...' : 'Acessar'}</button>
      <Link to="/scan"> Consultar contratos</ Link>
    </Form>
  </>
  );
}
