import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { format, parseISO, addMonths } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Month from '~/components/Month';
import { getYear, getMonth, subYears, addYears } from 'date-fns'

import api from '~/services/api';
import Logo from '~/assets/logo.png'
import { Container, Line } from './styles';


export default function ContractDetails() {
  const contract = useSelector(state => state.auth.contract)

  const calendars = useSelector(state => state.auth.calendar);
  const [ years, setYears ] = useState(new Date());
  const [ month, setMonth ] = useState()

  const formattedDate = fdate =>
    fdate == null
      ? ''
      : format(parseISO(fdate), "dd '/' MM '/' yyyy", { locale: pt });

  const test = parseInt(month)
  // console.tron.log(test)
  const last = parseInt(calendars.length) - 1;

  const semester1 = [ 0, 1, 2, 3, 4, 5 ];
  const semester2 = [ 6, 7, 8, 9, 10, 11 ];
  const semester3 = [ 12, 13, 14, 15, 16, 17 ];
  const semester4 = [ 18, 19, 20, 21, 22, 23 ];

  async function handlePrevYear() {
    if (getYear(years) == calendars[0][1]) {
    } else {
      setYears(subYears(years, 1));
    }
  }

  async function handleNextYear() {
    if (getYear(years) == calendars[last][1]) {
    } else {
      setYears(addYears(years, 1));
    }
  }

  function numberToMonth(number) {
    const monthnumber = getMonth(addMonths(parseISO(contract.start_date),number))
    return monthnumber
  }

  function monthYear(number) {
    const start = contract.start_date
    const year = getYear(parseISO(start))
    const month = (getMonth(parseISO(start)) + number)
    console.tron.log(year)
    let monthWord;
    let newmonth = month;
    let newyear = year;
    if (month > 11) {
      newmonth = month - 12;
      newyear = year + 1;
    }
    if (month > 23) {
      newmonth = month - 23;
      newyear = year + 2;
    }
    if (newmonth == 0) {
      monthWord = 'Jan'
    } else if (newmonth == 1) {
      monthWord = 'Fev'
    } else if (newmonth == 2) {
      monthWord = 'Mar'
    } else if (newmonth == 3) {
      monthWord = 'Abr'
    } else if (newmonth == 4) {
      monthWord = 'Maio'
    } else if (newmonth == 5) {
      monthWord = 'Jun'
    } else if (newmonth == 6) {
      monthWord = 'Jul'
    } else if (newmonth == 7) {
      monthWord = 'Ago'
    } else if (newmonth == 8) {
      monthWord = 'Set'
    } else if (newmonth == 9) {
      monthWord = 'Out'
    } else if (newmonth == 10) {
      monthWord = 'Nov'
    } else if (newmonth == 11) {
      monthWord = 'Dez'
    }


    return String(`${monthWord} / ${newyear}`)
  }

  return (
   <Container>
      <header>

        <div>
        <strong>Calendário de Acompanhamento - Programa Jovem Aprendiz</strong>
          <div className="content">
            <div className="subcontent">
              <div className="tagcontent">
                <strong>Aprendiz:</strong>
                <span>{contract.student.name}</span>
              </div>
              <div className="tagcontent">
                <strong>CPF:</strong>
                <span>{contract.student.cpf}</span>
              </div>
            </div>
            <div className="subcontent">
              <div className="tagcontent">
                <strong>Empresa:</strong>
                <span>{contract.company.name}</span>
              </div>
              <div className="tagcontent">
                <strong>CNPJ:</strong>
                <span>{contract.company.cnpj}</span>
              </div>
            </div>
            <div className="subcontent">
              <div className="tagcontent">
                <strong>Início do contrato:</strong>
                <span>{formattedDate(contract.start_date)}</span>
              </div>
              <div className="tagcontent">
                <strong>Fim do contrato:</strong>
                <span>{contract.end_date}</span>
              </div>
            </div>
          </div>

        </div>
        <img src= {Logo} alt={Logo}></img>
      </header>
      <div>
        <button type="button" onClick={handlePrevYear}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
          <strong>{getYear(years)}</strong>
        <button type="button" onClick={handleNextYear}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
        <Link to="/calendar/edit">Edit</Link>
      </div>

      <ul>
        <Line>
          {semester1.map(s =>
            <li>
              <span>{monthYear(s)}</span>
                <Month year={years} month={numberToMonth(s)}>-</Month>
            </li>
          )}
        </Line>
        <Line>
          {semester2.map(s =>
            <li>
              <span>{monthYear(s)}</span>
                <Month year={years} month={numberToMonth(s)}>-</Month>
            </li>
          )}
        </Line>
        <Line>
          {semester3.map(s =>
            <li>
              <span>{monthYear(s)}</span>
                <Month year={years} month={numberToMonth(s)}>-</Month>
            </li>
          )}
        </Line>
        <Line>
          {semester4.map(s =>
            <li>
              <span>{monthYear(s)}</span>
                <Month year={years} month={numberToMonth(s)}>-</Month>
            </li>
          )}
        </Line>
      </ul>
   </Container>
  );
}
