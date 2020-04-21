import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Month from '~/components/Month';
import { Container, Line } from './styles';
import { getYear, subYears, addYears } from 'date-fns'

export default function Calendar() {
  const calendars = useSelector(state => state.auth.calendar);
  const [ years, setYears ] = useState(new Date());
  const last = parseInt(calendars.length) - 1;

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

  return (
    <Container>
      <header>
        <div>
          <button type="button" onClick={handlePrevYear}>
            <MdChevronLeft size={36} color="#FFF" />
          </button>
            <div>
              <strong>{getYear(years)}</strong>
            </div>

          <button type="button" onClick={handleNextYear}>
            <MdChevronRight size={36} color="#FFF" />
          </button>
        </div>
        <div>
          <Link to='/calendar/edit'>
            <button className="edit" type="button">Editar</button>
          </Link>
        </div>
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
