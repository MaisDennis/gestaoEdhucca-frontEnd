import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import { getYear, subYears, addYears, parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt';
import Month from '~/components/Month';
import { Container, Line } from './styles';
import api from '~/services/api';
import { startCalendar } from '~/store/modules/auth/actions';

export default function Calendar() {
  const dispatch = useDispatch();
  const calendars = useSelector(state => state.auth.calendar);
  const [ years, setYears ] = useState(new Date());
  const last = parseInt(calendars.length) - 1;

  const formattedDate = fdate =>
    fdate == null
      ? ''
      : format(parseISO(fdate), "yyyy'-'MM'-'dd", { locale: pt });

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

  async function handleSubmit({ tDate, rDate, lrDate, pDate, fiStartDate, fiEndDate, fcStartDate, fcEndDate }) {
    if (tDate == 0) {
      tDate = ''
    } else {
      tDate = formattedDate( tDate );
    }
    if (rDate == 0) {
      rDate = ''
    } else {
      rDate = formattedDate( rDate );
    }
    if (lrDate == 0) {
      lrDate = ''
    } else {
      lrDate = formattedDate( lrDate );
    }
    if (pDate == 0) {
      pDate = ''
    } else {
      pDate = formattedDate( pDate );
    }
    if (fiStartDate == 0 || fiEndDate == 0) {
      fiStartDate = ''
      fiEndDate = ''
    } else {
      fiStartDate = formattedDate( fiStartDate );
      fiEndDate = formattedDate( fiEndDate );
    }
    if (fcStartDate == 0 || fcEndDate == 0) {
      fcStartDate = ''
      fcEndDate = ''
    } else {
      fcStartDate = formattedDate( fcStartDate );
      fcEndDate = formattedDate( fcEndDate );
    }

    try {
      const response = await api.put('calendars/1', {
        tDate: tDate,
        tType: 'T',
        rDate: rDate,
        rType: 'R',
        lrDate: lrDate,
        lrType: 'LR',
        pDate: pDate,
        pType: 'P',
        fiStartDate,
        fiEndDate,
        fiType: 'FI',
        fcStartDate,
        fcEndDate,
        fcType: 'FC',
      })
      // const parsedResponse = JSON.parse(response.data.calendar)
      // console.tron.log(parsedResponse)
      await dispatch(startCalendar());
    }
    catch {
      toast.error('Não foi possível cadastrar. Por favor, verificar dados.');
    }
  }

  return (
    <Container>
       <Link to='/calendar'>
          <button className="voltar" type="button">Voltar</button>
        </Link>
       <Form onSubmit={handleSubmit}>
       <div className="content">
          <div className="subcontent">
          <div className="datecontent">
        <span>Data teórica</span>
        <Input name="tDate" className="date" type="date" placeholder="Data Teórica" />
        </div>
        <div className="datecontent">
        <span>Feriado</span>
        <Input name="rDate" className="date" type="date" placeholder="Feriado" />
        </div>
        <div className="datecontent">
        <span>Licença rem.</span>
        <Input name="lrDate" className="date" type="date" placeholder="Licença Remunerada" />
        </div>
        <div className="datecontent">
        <span>Data Prática</span>
        <Input name="pDate" className="date" type="date" placeholder="Data Prática" />
        </div>
        </div>
        </div>
        <button type="submit">Cadastrar</button>
        <hr/>
        <div className="content">
          <div className="subcontent">
            <div className="tagcontent">
              <span>Início de férias individuais</span>
              <Input name="fiStartDate" type="date" placeholder="fiStart" />
            </div>
            <div className="tagcontent">
              <span>Fim de férias individuais</span>
              <Input name="fiEndDate" type="date" placeholder="fiEnd" />
            </div>
          </div>
          <hr/>
          <div className="subcontent">
            <div className="tagcontent">
              <span>Início de férias coletivas</span>
              <Input name="fcStartDate" type="date"/>
            </div>
            <div className="tagcontent">
              <span>Fim de férias inidviduais</span>
              <Input name="fcEndDate" type="date" />
            </div>
          </div>
        </div>

        <button type="submit">Cadastrar</button>
        <hr/>
      </Form>

      <header>
        <button type="button" onClick={handlePrevYear}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
          <strong>{getYear(years)}</strong>
        <button type="button" onClick={handleNextYear}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <Line>
          <li>
            <span>Jan</span>
            <div>
              <Month year={years} month={0}>-</Month>
            </div>
          </li>
          <li>
            <span>Fev</span>
            <Month year={years} month={1}>-</Month>
          </li>
          <li>
            <span>Mar</span>
            <Month year={years} month={2}>-</Month>
          </li>
        </Line>
        <Line>
          <li>
            <span>Abr</span>
            <Month year={years} month={3}>-</Month>
          </li>
          <li>
            <span>Mai</span>
            <Month year={years} month={4}>-</Month>
          </li>
          <li>
            <span>Jun</span>
            <Month year={years} month={5}>-</Month>
          </li>
        </Line>
        <Line>
        <li>
          <span>Jul</span>
          <Month year={years} month={6}>-</Month>
        </li>
        <li>
        <span>Aug</span>
          <Month year={years} month={7}>-</Month>
        </li>
        <li>
        <span>Set</span>
          <Month year={years} month={8}>-</Month>
        </li>
        </Line>
        <Line>
        <li>
          <span>Out</span>
          <Month year={years} month={9}>-</Month>
        </li>
        <li>
        <span>Nov</span>
          <Month year={years} month={10}>-</Month>
        </li>
        <li>
        <span>Dez</span>
          <Month year={years} month={11}>-</Month>
        </li>
        </Line>

      </ul>
    </Container>
  )
}
