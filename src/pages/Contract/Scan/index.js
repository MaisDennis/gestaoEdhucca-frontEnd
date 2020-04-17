import React, { useState } from 'react';
import {useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Wrapper, Container, Body } from './styles';
import api from '~/services/api';
import history from '~/services/history';
import logo from '~/assets/logo.png';

export default function Scan() {
  const [contract, setContract] = useState([]);
  const [student, setStudent] = useState([]);
  const [company, setCompany] = useState([]);
  const [chrono, setChrono] = useState([]);
  const [visible, setVisible] = useState(false);
  const loading = useSelector(state => state.auth.loading);
  const formattedDate = fdate =>
  fdate == null
    ? ''
    : format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

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

  async function handleSubmit( token ) {

        const response = await api.get(`contracts/scan/`, {
          params: token,
        })
        console.tron.log(response)
        if (response.data == '') {
          toast.error('Por favor, inserir um código.');
        } else {
          setContract(response.data)
          setStudent(response.data.student)
          setCompany(response.data.company)
          const test = response.data.chrono;
          // const Test = arraybuild(test)
          // console.tron.log(Test)
          // setChrono(Test)
          setVisible(!visible);
        }

  }

    // function arraybuild ( chronodata ) {
    //   let i;
    //   let array = [];
    //   let Array = [];
    //   for (i=0; i< chronodata.length; i += 1) {
    //     array.push(chronodata[i][0])

    //     array.push(chronodata[i][5])
    //     array.push('      ')
    //   }
    //   return array
    // }

  return (
    <Container>
      <h2>Bem-vindo a consulta de contratos.</h2>
      <header>

          <div>
            <img src={logo} alt="logo"></img>
          </div>
        <Form onSubmit={handleSubmit}>
          <Input name="token" type="text" placeholder="Insira o código" />
          <button type="submit">Acessar</button>
        </Form>

        <Link to="/"> Retornar</ Link>
      </header>

      <Body visible={visible}>
        <div className="d1" >
          <div className="d2">
            <div className="d3">
              <strong>Aprendiz:</strong>
              <span>{student.name}</span>
            </div>
            <div className="d3">
              <strong>CPF:</strong>
              <span>{formattedCpf(student.cpf)}</span>
            </div>
          </div>
          <div className="d2">
            <div className="d3">
              <strong>Empresa:</strong>
              <span>{company.name}</span>
            </div>
            <div className="d3">
              <strong>CNPJ:</strong>
              <span>{formattedCnpj(company.cnpj)}</span>
            </div>
          </div>
          <div className="d2">
            <div className="d3">
              <strong>Início do contrato:</strong>
              <span>{formattedDate(contract.start_date)}</span>
            </div>
            <div className="d3">
              <strong>Fim do contrato:</strong>
              <span>{formattedDate(contract.end_date)}</span>
            </div>
          </div>
          <div className="d2">
            <div className="d3">
              <strong>Status:</strong>
              <span className="status">{contract.token}</span>
            </div>
          </div>
        </div>

      </Body>


    </Container>
  );
}

