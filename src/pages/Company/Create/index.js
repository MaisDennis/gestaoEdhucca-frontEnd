import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container } from '~/pages/_layouts/create/styles';
import api from '~/services/api';
import { startCalendar } from '~/store/modules/auth/actions';

export default function Company() {
  const dispatch = useDispatch();
  async function handleSubmit({ name, cnpj }) {
    try {
      await api.post('companies', {
        name,
        cnpj,
      })

    }
    catch {
      toast.error('Não foi possível cadastrar. Por favor, verificar o CNPJ.');
      dispatch(startCalendar())
    }
  }

  function handleInputChange(e) {
    // const mask = mCPF(e)
    // console.tron.log('e')
  }

  return (
    <Container>
      <h2>Empresas</h2>
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome da empresa" />
        <Input name="cnpj"  placeholder="Ex.: 00.000.000/0000-00" onChange={handleInputChange} />
        <button type="submit">Cadastrar</button>

      </Form>
      <Link to='/companies/list'>
        <button className="List" type="button"> Lista de empresas</button>
      </Link>
    </Container>
  );
}

