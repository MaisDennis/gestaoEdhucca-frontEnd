import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container } from '~/pages/_layouts/create/styles';
import api from '~/services/api';

export default function Company() {

  async function handleSubmit({ name, cnpj }) {
    console.tron.log(cnpj)
    try {
      await api.post('companies', {
        name,
        cnpj,
      })
    }
    catch {
      toast.error('Não foi possível cadastrar. Por favor, verificar o CNPJ.');
    }
  }

  function handleInputChange(e) {
    // const mask = mCPF(e)
    console.tron.log('e')
  }

  return (
    <Container>
      <h2>Empresas</h2>
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome da empresa" />
        <Input name="123"  placeholder="Ex.: 00.000.000/0000-00" onChange={handleInputChange} />
        <button type="submit">Cadastrar</button>

      </Form>
      <Link to='/companies/list'>
        <button className="List" type="button"> Lista de empresas</button>
      </Link>
    </Container>
  );
}

