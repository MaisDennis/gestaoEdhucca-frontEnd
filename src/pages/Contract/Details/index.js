import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO, addMonths, getYear, getMonth } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Month from '~/components/MonthStudent';
import Logo from '~/assets/logo.png'
import { Container, Line } from './styles';

export default function ContractDetails() {
  const contract = useSelector(state => state.auth.contract)
  const [ years, setYears ] = useState(new Date());

  const formattedDate = fdate =>
    fdate == null
      ? ''
      : format(parseISO(fdate), "dd '/' MM '/' yyyy", { locale: pt });

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

  const semester1 = [ 0, 1, 2, 3, 4, 5 ];
  const semester2 = [ 6, 7, 8, 9, 10, 11 ];
  const semester3 = [ 12, 13, 14, 15, 16, 17 ];
  const semester4 = [ 18, 19, 20, 21, 22, 23 ];

  // receives number for each in semester (which adds on start month) -> returns month of year.
  function numberToMonth(number) {
    const monthnumber = getMonth(addMonths(parseISO(contract.start_date),number))
    return monthnumber
  }
  // receives number for each in semester (which adds on start month) -> returns [ 'MMM/YYYY', year ].
  function monthYear(number) {
    const start = contract.start_date
    const year = getYear(parseISO(start))
    const month = (getMonth(parseISO(start)) + number)
    console.tron.log(years)
    let monthWord;
    let newmonth = month;
    let newyear = year;
    let stringyear;
    let concatyear;
    let parsedconcatyear = parseISO(start);

    if (month > 11) {
      newmonth = month - 12;
      newyear = year + 1;
      stringyear = JSON.stringify(newyear);
      concatyear = stringyear.concat('-10-10');
      parsedconcatyear = parseISO(concatyear);
      console.tron.log(parsedconcatyear)
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

    return [String(`${monthWord} / ${newyear}`), parsedconcatyear ]
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
                <span>{formattedCpf(contract.student.cpf)}</span>
              </div>
            </div>
            <div className="subcontent">
              <div className="tagcontent">
                <strong>Empresa:</strong>
                <span>{contract.company.name}</span>
              </div>
              <div className="tagcontent">
                <strong>CNPJ:</strong>
                <span>{formattedCnpj(contract.company.cnpj)}</span>
              </div>
            </div>
            <div className="subcontent">
              <div className="tagcontent">
                <strong>Início do contrato:</strong>
                <span>{formattedDate(contract.start_date)}</span>
              </div>
              <div className="tagcontent">
                <strong>Fim do contrato:</strong>
                <span>{formattedDate(contract.end_date)}</span>
              </div>
            </div>
            <div className="subcontent">
              <div className="tagcontent">
                <strong>Status:</strong>
                <span className="status">{contract.token ? 'aprovado' : 'pendente'}</span>
              </div>
            </div>
          </div>

        </div>
        <img src= {Logo} alt={Logo}></img>
      </header>

      <ul>
        <Line>
          {semester1.map(s =>
            <li>
              <span>{monthYear(s)[0]}</span>
                <Month year={monthYear(s)[1]} month={numberToMonth(s)}>-</Month>
            </li>
          )}
        </Line>
        <Line>
          {semester2.map(s =>
            <li>
              <span>{monthYear(s)[0]}</span>
                <Month year={monthYear(s)[1]} month={numberToMonth(s)}>-</Month>
            </li>
          )}
        </Line>
        <Line>
          {semester3.map(s =>
            <li>
              <span>{monthYear(s)[0]}</span>
                <Month year={monthYear(s)[1]} month={numberToMonth(s)}>-</Month>
            </li>
          )}
        </Line>
        <Line>
          {semester4.map(s =>
            <li>
              <span>{monthYear(s)[0]}</span>
                <Month year={monthYear(s)[1]} month={numberToMonth(s)}>-</Month>
            </li>
          )}
        </Line>
      </ul>

      <div className="token">
        <div className="tagcontent">
          <strong>Código: </strong>
          <span className="status">{contract.token ? contract.token : 'pendente'}</span>
        </div>
      </div>

      <footer>
        <div>
          <span>Aluno</span>
          <div>
            <span>Assinatura:</span> <span>___________________________________________________</span>
          </div>
          <div>
            <span>Nome:</span> <span>____________________________</span>
          </div>
          <div>
            <span>CPF:</span> <span>____________________________</span>
          </div>
        </div>
        <div>
          <span>Administrador</span>
          <div>
            <span>Assinatura:</span> <span>___________________________________________________</span>
          </div>
          <div>
            <span>Nome:</span> <span>____________________________</span>
          </div>
          <div>
            <span>CPF:</span> <span>____________________________</span>
          </div>
        </div>
      </footer>
   </Container>
  );
}
