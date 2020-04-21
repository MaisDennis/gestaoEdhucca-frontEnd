import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container } from '~/pages/_layouts/create/styles';
import api from '~/services/api';
import history from '~/services/history';
import InputMask from 'react-input-mask';

export default function Student() {
  const [masked, setMasked] = useState(' ');

  async function handleSubmit({ name }) {
    try {
      const cpf = masked.replace(/\D/gim, '');
      await api.post('students', {
        name,
        cpf,
      })
      history.push('/students/list');
    }
    catch {
      toast.error('Não foi possível cadastrar. Por favor, verificar o CPF.');
    }
  };

  return (
    <Container>
      <h2>Alunos</h2>
      <Form onSubmit={handleSubmit}>
        <Input name="name"  type="text" placeholder="Nome completo" />
        <InputMask name ="cpf" mask="999.999.999-99" placeholder="Ex.: 000.000.000-00" maskChar="_"
          onChange={e => {
            setMasked(e.target.value);
          }}
        />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to='/students/list'>
      <button className="List" type="button"> Lista de alunos</button>
      </Link>
    </Container>
  );
}
