import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { loadCalendar } from '~/store/modules/auth/actions';

import { Container } from './styles';
export default function Dashboard() {
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(loadCalendar())
  }, [])

  return (
    <Container>
      <header>

          <strong>Bem-vindo</strong>

      </header>
    </Container>
  )
}
