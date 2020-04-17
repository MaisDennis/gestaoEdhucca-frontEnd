import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container } from '~/pages/_layouts/create/styles';
import api from '~/services/api';
import history from '~/services/history';
import { startCalendar } from '~/store/modules/auth/actions';
import InputMask from 'react-input-mask';

export default function Company() {
  const dispatch = useDispatch();
  const [masked, setMasked] = useState(' ');

  async function handleSubmit({ name }) {
    try {
      const cnpj = masked.replace(/\D/gim, '');
      await api.post('companies', {
        name,
        cnpj,
      })
      history.push('/companies/list');
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
        <InputMask
          name ="cnpj" mask="99.999.999/9999-99" placeholder="Ex.: 00.000.000/0000-00" maskChar="_"
            onChange={e => {
              setMasked(e.target.value);
            }}
        />
        <button type="submit">Cadastrar</button>

      </Form>
      <Link to='/companies/list'>
        <button className="List" type="button"> Lista de empresas</button>
      </Link>
    </Container>
  );
}

