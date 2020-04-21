import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { Container, Line } from '~/pages/_layouts/list/styles';

export default function CompanyList() {
  const [ companies, setCompanies ] = useState([]);
  const [ qFilter, setQFilter ] = useState([]);

  useEffect(() => {
    loadCompanies('');
  }, [])

  async function loadCompanies(filter) {
    const response = await api.get('companies', {
      params: { test: filter },
    })
    console.tron.log(filter)
    setCompanies(response.data)
  }
  // console.tron.log(companies);

  function handleInputChange(e) {
    setQFilter(e.target.value);
    // console.log(qFilter)
  }

  function handleQueryInput(e) {
    if ( e.key === 'Enter')
    // console.log(qFilter);
    loadCompanies(qFilter);
  }

  let formattedCnpj = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);

    if (match) {
      return match[1] + '.' + match[2] + '.' + match[3] + '/' + match[4] + '-' + match[5]
    };

    return null
  };

  return (
   <Container>
      <header>
        <strong>Gerenciando empresas</strong>
        <div>
          <input name='filter' className='filter' placeholder='Busca por empresas'
            onChange={handleInputChange} onKeyDown={handleQueryInput}
          />
          <Link to='/companies'>
            <button type="button">Voltar</button>
          </Link>
        </div>
        <p>
          <strong>ID</strong>
          <strong>Nome</strong>
          <strong>CNPJ</strong>
          <strong>Situação</strong>
          <strong>Nº alunos</strong>
        </p>
      </header>

      <ul>
        {companies.map(c =>
          <Line key={c.id}>
            <strong>#{c.id}</strong>
            <strong>{c.name}</strong>
            <strong>{formattedCnpj(c.cnpj)}</strong>
            <strong>Ativo</strong>
            <strong>3</strong>
          </Line>
        )}
      </ul>
   </Container>
  );
}
