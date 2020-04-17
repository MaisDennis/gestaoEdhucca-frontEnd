import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { Container, Line } from '~/pages/_layouts/list/styles';
// import ListActions from '~/components/ListActions';

export default function StudentList() {
  const [ students, setStudents ] = useState([]);
  const [ qFilter, setQFilter ] = useState([]);

  useEffect(() => {
    loadStudents('');
  }, [])

  async function loadStudents(filter) {
    const response = await api.get('students', {
      // params: { test: filter },
    })

    setStudents(response.data)
  }
  console.tron.log(students);

  function handleInputChange(e) {
    setQFilter(e.target.value);
    // console.log(qFilter)
  }

  function handleQueryInput(e) {
    if ( e.key === 'Enter')
    // console.log(qFilter);
    loadStudents(qFilter);
  }

  let formattedCpf = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);

    if (match) {
      return '' + match[1] + '.' + match[2] + '.' + match[3] + '-' + match[4]
    };

    return null
  };

  return (
   <Container>
      <header>
        <strong>Gerenciando alunos</strong>
        <div>
          <input name='filter' className='filter' placeholder='Busca por alunos'
            onChange={handleInputChange} onKeyDown={handleQueryInput}
          />
          <Link to='/students'>
            <button type="button">Voltar</button>
          </Link>
        </div>
        <p>
          <strong>ID</strong>
          <strong>Nome</strong>
          <strong>CPF</strong>
          <strong>Situação</strong>
          <strong>Ações</strong>
        </p>
      </header>

      <ul>
        {students.map(s =>
          <Line key={s.id}>
            <strong>#{s.id}</strong>
            <strong>{s.name}</strong>
            <strong>{formattedCpf(s.cpf)}</strong>
            <strong>Ativo</strong>
            <strong>Contrato</strong>

          </Line>
        )}
      </ul>
   </Container>
  );
}
