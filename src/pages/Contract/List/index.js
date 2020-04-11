import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { Container, Line } from '~/pages/_layouts/list/styles';
import Approval  from '~/components/Approval';
// import ListActions from '~/components/ListActions';

export default function ContractList() {
  const [ contracts, setContracts ] = useState([]);
  const [ qFilter, setQFilter ] = useState([]);
  const formattedDate = fdate =>
    fdate == null
      ? ''
      : format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

  useEffect(() => {
    loadContracts('');
  }, [])

  async function loadContracts(filter) {
    const response = await api.get('contracts', {
      // params: { test: filter },
    })
    //console.tron.log(response)
    setContracts(response.data)
  }
  console.tron.log(contracts);

  function handleInputChange(e) {
    setQFilter(e.target.value);
    // console.log(qFilter)
  }

  function handleQueryInput(e) {
    if ( e.key === 'Enter')
    // console.log(qFilter);
    loadContracts(qFilter);
  }

  return (
   <Container>
      <header>
        <strong>Gerenciando contratos</strong>
        <div>
          <input name='filter' className='filter' placeholder='Busca por contratos'
            onChange={handleInputChange} onKeyDown={handleQueryInput}
          />
          <Link to='/contracts'>
            <button type="button"><MdAdd size={24} color='#FFF'/>Voltar</button>
          </Link>
        </div>
        <p>
          <strong>ID</strong>
          <strong>Aluno</strong>
          <strong>Empresa</strong>
          <strong>Criação</strong>
          <strong>Início</strong>
          <strong>Fim</strong>
          <strong>Visualizar</strong>
          <strong>Status</strong>
        </p>
      </header>

      <ul>
        {contracts.map(c =>
          <Line key={c.id}>
            <strong>{c.id}</strong>
            <strong>{c.student.name}</strong>
            <strong>{c.company.name}</strong>
            <strong>{formattedDate(c.createdAt)}</strong>
            <strong>{formattedDate(c.start_date)}</strong>
            <strong>{formattedDate(c.end_date)}</strong>
            <strong>detalhes</strong>
        <strong>{c.token ? 'Aprovado' : <Approval pin={c.id} data={c}></Approval>}</strong>

          </Line>
        )}
      </ul>
   </Container>
  );
}
