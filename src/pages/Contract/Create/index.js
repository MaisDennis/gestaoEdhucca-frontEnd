import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container, Select } from '~/pages/_layouts/create/styles';
import { Line } from '~/pages/_layouts/list/styles';
import api from '~/services/api';

export default function Contract() {
  const [students, setStudents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [chrono, setChrono] = useState([]);

  useEffect(() => {
    async function load() {
      const sResponse = await api.get('students')
      setStudents(sResponse.data);
      const cResponse = await api.get('companies')
      setCompanies(cResponse.data);
    }
    load();
  }, [])

  const sOptions = students.map(s => ({ id: s.id, title: s.name }));
  const cOptions = companies.map(c => ({ id: c.id, title: c.name }));

  async function handleSubmit({ student_id, company_id, start_date }) {
    console.tron.log(start_date)
    try {
      const response = await api.post('contracts', {
        student_id,
        company_id,
        start_date,
      })
      setChrono(response.data.conglo)
      // console.tron.log(response.data)
    }
    catch {
      toast.error('Não foi possível cadastrar.');
    }
  }

  return (
    <Container>
      <h2>Contratos</h2>
      <Form onSubmit={handleSubmit}>
        <div className="content">
          <div className = "subcontent">
            <Select name="student_id" options={sOptions} placeholder="aluno..." />
          </div>
          <div className = "subcontent">
            <Select name="company_id" options={cOptions} placeholder="empresa..." />
          </div>
        </div>
        <Input name="start_date" type="date" placeholder="Data de início" />
        <hr />
        <button type="submit">Enviar para a aprovação</button>
      </Form>

      <Link to='/contracts/list'>
        <button className="List" type="button"> Lista de contratos</button>
      </Link>

      <ul>
        {chrono.map(c =>
          <Line key={c}>
            <strong>{c[0]}</strong>
            <strong>{c[1]}</strong>
          </Line>
        )}
      </ul>
    </Container>
  );
}

