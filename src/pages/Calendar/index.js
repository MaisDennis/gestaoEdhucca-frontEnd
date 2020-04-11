import React, { useState, useEffect }  from 'react';
import {MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Month from '~/components/Month';
import { Container, Line } from './styles';
import { getYear, subYears, addYears } from 'date-fns'

export default function Calendar() {
  const [ years, setYears ] = useState(new Date());

  async function handlePrevYear() {
    setYears(subYears(years, 1));
  }

  async function handleNextYear() {
    setYears(addYears(years, 1));
  }

  return (
    <Container>
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
          <span>Abr</span>
          <Month year={years} month={6}>-</Month>
        </li>
        <li>
        <span>Mai</span>
          <Month year={years} month={7}>-</Month>
        </li>
        <li>
        <span>Jun</span>
          <Month year={years} month={8}>-</Month>
        </li>
        </Line>
        <Line>
        <li>
          <span>Abr</span>
          <Month year={years} month={9}>-</Month>
        </li>
        <li>
        <span>Mai</span>
          <Month year={years} month={10}>-</Month>
        </li>
        <li>
        <span>Jun</span>
          <Month year={years} month={11}>-</Month>
        </li>
        </Line>

      </ul>
    </Container>
  )
}
