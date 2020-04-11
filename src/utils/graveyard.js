import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '~/services/api';
import { Container, Line } from './styles';
import { Form, Input } from '@rocketseat/unform';


export default function Month( { pin } ) {
  // const [ calendars, setCalendars ] = useState([]);
  const calendars = useSelector(state => state.auth.calendar.data[2].calendar);


/*
  async function loadCalendar() {
    const response = await api.get('calendars');

    setCalendars(response.data[0].calendar);
    // console.tron.log(response.data)
  }

*/
  const m = arrayMonth();
  // console.tron.log(m)
 //  const dw = arrayDayWeek(m);
  // console.tron.log(dw)
    const f = arrayFirstDay(m);
// console.tron.log(f)
    const fw = arrayFirstWeek(m);
    const fw1 = fw.array1
  // console.tron.log(fw1)
    const fw2 = fw.array2
  // console.tron.log(fw2)
  const fw3 = fw.array3
  const fw4 = fw.array4
  const fw5 = fw.array5
  //console.tron.log(fw5)

  function arrayMonth() {
    // console.tron.log(calendars[1][1])
    const y = 2020;
    const m = 0;
    let i;
    const arrayM = []
    for (i = 0; i < calendars.length; i += 1 ) {
      if (calendars[i][1] == y) {
        if (calendars[i][2] == m) {
          arrayM.push(calendars[i])
        }
      }
    }
    return arrayM;
  }

  function arrayDayWeek(month) {
    const Sundays = [];
    const Mondays = [];
    const Tuesdays = [];
    const Wednesdays = [];
    const Thursdays = [];
    const Fridays = [];
    const Saturdays = [];
    let i;
    for ( i = 0; i < month.length; i += 1 ) {
      if (month[i][4] == 0) {
        Sundays.push(month[i]);
      }
      if (month[i][4] == 1) {
        Mondays.push(month[i]);
      }
      if (month[i][4] == 2) {
        Tuesdays.push(month[i]);
      }
      if (month[i][4] == 2) {
        Wednesdays.push(month[i]);
      }
      if (month[i][4] == 2) {
        Thursdays.push(month[i]);
      }
      if (month[i][4] == 2) {
        Fridays.push(month[i]);
      }
      if (month[i][4] == 2) {
        Saturdays.push(month[i]);
      }
    }
    // console.tron.log(Tuesdays)
    return Sundays
      // Mondays, Tuesdays, Wednesdays, Thursdays, Fridays, Saturdays]
  }

  function arrayFirstDay(month) {
    let test;
    let i;
    for ( i = 0; i < month.length; i += 1) {
      test =month[0][4]
    }
    return test
  }

function arrayFirstWeek(month) {
    let test;
    let i;
    let j = 0;
    let array1 = [];
    let array2 = [];
    let array3 = [];
    let array4 = [];
    let array5 = [];
    for ( i = 0; i < month.length; i += 1) {
      test =month[0][4]
    }
    let test2;
    for ( i = test; i < 7; i += 1) {
      test2 = month[j]
      array1.push(test2)
      j += 1;
    }
    for ( i = 0; i < test; i += 1) {
      test2 = [0,0,0,0,0,0,0]
      array1.push(test2)
      array1.sort()
    }
    for ( i = 7; i < 14; i += 1) {
      test2 = month[j]
      array2.push(test2)
      j += 1;
    }
    for ( i = 14; i < 21; i += 1) {
      test2 = month[j]
      array3.push(test2)
      j += 1;
    }
    for ( i = 21; i < 28; i += 1) {
      test2 = month[j]
      array4.push(test2)
      j += 1;
    }
    for ( i = 28; i < 35; i += 1) {
      test2 = month[j]
      if (!month[j]) {
        array5.push([0,0,0,0,0,0,0])
      } else {
        array5.push(test2)
      }

      j += 1;
    }
    return { array1, array2, array3, array4, array5 }
  }

  function handleChange() {
    console.tron.log('a')
  }
  return (
    <Container>
      <div>
      <span inf={0}>Jan</span>
      <ul>
        <Line>
          <li>D</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>S</li>
        </Line>
        <Line>
          {fw1.map(f => <li key={f[7]}>{f[3]==0 ? '.' : f[3] }</li>)}
        </Line>
        <Line>
          {fw1.map(f => <li key={f[7]}>{f[5]==0 ? '.' : f[5]} </li>)}
        </Line>
        <Line>
          {fw2.map(f => <li>{f[3]}</li>)}
        </Line>
        <Line>
          {fw2.map(f => <li>{f[5]}</li>)}
        </Line>
        <Line>
          {fw3.map(f => <li>{f[3]}</li>)}
        </Line>
        <Line>
          {fw3.map(f => <li key={f[7]}>{f[5]==0 ? '.' : f[5]} </li>)}
        </Line>
        <Line>
          {fw4.map(f => <li>{f[3]}</li>)}
        </Line>
        <Line>
          {fw4.map(f => <li key={f[7]}>{f[5]==0 ? '.' : f[5]} </li>)}
        </Line>
        <Line>
          {fw5.map(f => <li>{f[3]}</li>)}
        </Line>
        <Line>
          {fw5.map(f => <li key={f[7]}>{f[5]==0 ? '.' : f[5]} </li>)}
        </Line>
      </ul>
    </div>

    </Container>

  );
}


