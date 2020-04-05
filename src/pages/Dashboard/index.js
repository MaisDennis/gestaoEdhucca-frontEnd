import React from 'react';
import {MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container } from './styles';
export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
          <strong>31 de Maio</strong>
        <button type="button">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>
    </Container>
  )
}
