import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container } from '~/pages/_layouts/create/styles';
import api from '~/services/api';

export default function Student() {

  async function handleSubmit({ name, cpf }) {
    console.tron.log(cpf)
    try {
      await api.post('students', {
        name,
        cpf,
      })
    }
    catch {
      toast.error('Não foi possível cadastrar. Por favor, verificar o CPF.');
    }
  }

  function handleInputChange(e) {
    // const mask = mCPF(e)
    console.tron.log('e')
  }

  return (
    <Container>
      <h2>Alunos</h2>
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" class="form-control cpf-mask" placeholder="Nome completo" />
        <Input name="cpf" placeholder="Ex.: 000.000.000-00" onChange={handleInputChange}/>

        <button type="submit">Cadastrar</button>
      </Form>
      <Link to='/students/list'>
      <button className="List" type="button"> Lista de alunos</button>
      </Link>
    </Container>
  );
}
