import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Line, LineType, LiType, Li } from './styles';
import { getYear } from 'date-fns'

export default function Month( { year, month } ) {
  const calendars = useSelector(state => state.auth.calendar);
  // const calendars = useSelector(state => state.auth.contract.chrono)
  // console.tron.log(test)

  const m = arrayMonth(month, year);
  const fw = arrayFirstWeek(m);
  const fw1 = fw.array1;
  const fw2 = fw.array2;
  const fw3 = fw.array3;
  const fw4 = fw.array4;
  const fw5 = fw.array5;
  const fw6 = fw.array6;

  function arrayMonth(m, year) {
    // console.tron.log(getYear(year))
    const y = getYear(year);
    let i;
    let array0 = [];

    for (i = 0; i < calendars.length; i += 1 ) {
      if (calendars[i][1] == y) {
        if (calendars[i][2] == m) {
          array0.push(calendars[i])
        }
      }
    }

    return array0
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
    let array6 = [];

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
    for ( i = 35; i < 42; i += 1) {
      test2 = month[j]
      if (!month[j]) {
        array6.push([0,0,0,0,0,0,0])
      } else {
        array6.push(test2)
      }
      j += 1;
    }

    return { array1, array2, array3, array4, array5, array6 }
  }

  return (
    <Container>
      <ul>
        <Line>
          <li>D</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>S</li>
        </Line>
        <hr></hr>
        <Line>
          {fw1.map(f =>
            <Li key={f[7]} type={f[5]}>
              {f[3] == 0 ? '.' : f[3] }
            </Li>
          )}
        </Line>
        <LineType>
          {fw1.map(f =>
            <LiType key={f[7]} type={f[5]}>
              {f[5] == 0 ? '.' : f[5]}
            </LiType>
          )}
        </LineType>
        <Line>
          {fw2.map(f => <Li key={f[7]} type={f[5]}>{f[3]}</Li>)}
        </Line>
        <LineType>
          {fw2.map(f => <LiType key={f[7]} type={f[5]}>{f[5]==0 ? '.' : f[5]} </LiType>)}
        </LineType>
        <Line>
          {fw3.map(f => <Li key={f[7]} type={f[5]}>{f[3]}</Li>)}
        </Line>
        <LineType>
          {fw3.map(f => <LiType key={f[7]} type={f[5]}>{f[5]==0 ? '.' : f[5]} </LiType>)}
        </LineType>
        <Line>
          {fw4.map(f => <Li key={f[7]} type={f[5]}>{f[3]}</Li>)}
        </Line>
        <LineType>
          {fw4.map(f => <LiType key={f[7]} type={f[5]}>{f[5]==0 ? '.' : f[5]} </LiType>)}
        </LineType>
        <Line>
          {fw5.map(f => <Li key={f[7]} type={f[5]}>{f[3]==0 ? '.' : f[3] }</Li>)}
        </Line>
        <LineType>
          {fw5.map(f => <LiType key={f[7]} type={f[5]}>{f[5]==0 ? '.' : f[5]} </LiType>)}
        </LineType>
        <Line>
          {fw6.map(f => <Li key={f[7]} type={f[5]}>{f[3]==0 ? '.' : f[3] }</Li>)}
        </Line>
        <LineType>
          {fw6.map(f => <LiType key={f[7]} type={f[5]}>{f[5]==0 ? '.' : f[5]} </LiType>)}
        </LineType>
      </ul>
    </Container>
  );
}


