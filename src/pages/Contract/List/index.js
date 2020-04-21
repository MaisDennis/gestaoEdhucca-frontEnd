import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { Container, Line } from '~/pages/_layouts/list/styles';
import Approval  from '~/components/Approval';
import { startDetails } from '~/store/modules/auth/actions';

export default function ContractList() {
  const [ contracts, setContracts ] = useState([]);
  const [ qFilter, setQFilter ] = useState([]);
  const dispatch = useDispatch();
  const formattedDate = fdate =>
    fdate == null
      ? ''
      : format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

  useEffect(() => {
    loadContracts('');
  }, [])

  async function loadContracts(filter) {
    // console.tron.log(filter)
    const response = await api.get('contracts', {
      // params: { test: filter },
    })

    setContracts(response.data)
  }
  // console.tron.log(contracts);

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

          <Link to='/contracts'>
            <button type="button">Voltar</button>
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
            <strong><Link to={`/contracts/details/${c.id}`} onClick={() => {dispatch(startDetails(c.id))}}>detalhes</Link></strong>
        <strong>{c.token ? 'Aprovado' : <Approval pin={c.id} data={c}></Approval>}</strong>
          </Line>
        )}
      </ul>
   </Container>
  );
}
