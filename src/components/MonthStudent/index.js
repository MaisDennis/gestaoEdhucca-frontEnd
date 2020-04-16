import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Line, LineType, LiType, Li } from './styles';
import { getYear } from 'date-fns'

export default function Month( { year, month } ) {
  const calendars = useSelector(state => state.auth.calendar);
  const chrono = useSelector(state => state.auth.contract.chrono)
  //console.tron.log(test)
  //console.tron.log(calendars)

  const domArray = arrayMonth(month, year);
  const fw = arrayEachWeek(domArray);
  const fw1 = fw.array1;
  const fw2 = fw.array2;
  const fw3 = fw.array3;
  const fw4 = fw.array4;
  const fw5 = fw.array5;
  const fw6 = fw.array6;

  // receives month & year -> returns array with bracket(data) for each day of the month.
  function arrayMonth(Month, year) {
    // console.tron.log(getYear(year))
    const y = getYear(year);
    let i;
    let arrayM = [];

    for (i = 0; i < calendars.length; i += 1 ) {
      if (calendars[i][1] == y) {
        if (calendars[i][2] == Month) {
          arrayM.push(calendars[i])
        }
      }
    }
    return arrayM
  }

  // receives month -> returns each line of the month calendar.
  // obs. dow = day of the week.
  function arrayEachWeek(domArray) {
    let dowDay1 = domArray[0][4]
    let dataForDay;
    let i;
    let j = 0;
    let array1 = [];
    let array2 = [];
    let array3 = [];
    let array4 = [];
    let array5 = [];
    let array6 = [];

    // fill the 1st week with data. array1 = [ 1st week data ].
    for ( i = dowDay1; i < 7; i += 1) {
      dataForDay = domArray[j]
      array1.push(dataForDay)
      j += 1;
    }
    // fill before dowDay1 with data = [ zero ].
    for ( i = 0; i < dowDay1; i += 1) {
      dataForDay = [0,0,0,0,0,0,0]
      array1.push(dataForDay)
      array1.sort()
    }
    // fill the 2nd week with data. array2 = [ 2nd week data ].
    for ( i = 7; i < 14; i += 1) {
      dataForDay = domArray[j]
      array2.push(dataForDay)
      j += 1;
    }
    // fill the 3rd week with data. array3 = [ 3rd week data ].
    for ( i = 14; i < 21; i += 1) {
      dataForDay = domArray[j]
      array3.push(dataForDay)
      j += 1;
    }
    // fill the 4th week with data. array4 = [ 4th week data ].
    for ( i = 21; i < 28; i += 1) {
      dataForDay = domArray[j]
      array4.push(dataForDay)
      j += 1;
    }
    // fill the 5th week with data. array5 = [ 5th week data ].
    for ( i = 28; i < 35; i += 1) {
      dataForDay = domArray[j]
      if (!domArray[j]) {
        array5.push([0,0,0,0,0,0,0])
      } else {
        array5.push(dataForDay)
      }
      j += 1;
    }
    // Sometimes a 6th week is necessary.
    for ( i = 35; i < 42; i += 1) {
      dataForDay = domArray[j]
      if (!domArray[j]) {
        array6.push([0,0,0,0,0,0,0])
      } else {
        array6.push(dataForDay)
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
            <Li key={f[6]} type={f[5]}>
              {f[3] == 0 ? '.' : f[3] }
            </Li>
          )}
        </Line>
        <LineType>
          {fw1.map(f =>
            <LiType key={f[6]} type={f[5]}>
              {f[5] == 0 ? '.' : f[5]}
            </LiType>
          )}
        </LineType>
        <Line>
          {fw2.map(f => <Li key={f[6]} type={f[5]}>{f[3]}</Li>)}
        </Line>
        <LineType>
          {fw2.map(f => <LiType key={f[6]} type={f[5]}>{f[5]==0 ? '.' : f[5]} </LiType>)}
        </LineType>
        <Line>
          {fw3.map(f => <Li key={f[6]} type={f[5]}>{f[3]}</Li>)}
        </Line>
        <LineType>
          {fw3.map(f => <LiType key={f[6]} type={f[5]}>{f[5]==0 ? '.' : f[5]} </LiType>)}
        </LineType>
        <Line>
          {fw4.map(f => <Li key={f[6]} type={f[5]}>{f[3]}</Li>)}
        </Line>
        <LineType>
          {fw4.map(f => <LiType key={f[6]} type={f[5]}>{f[5]==0 ? '.' : f[5]} </LiType>)}
        </LineType>
        <Line>
          {fw5.map(f => <Li key={f[6]} type={f[5]}>{f[3]==0 ? '.' : f[3] }</Li>)}
        </Line>
        <LineType>
          {fw5.map(f => <LiType key={f[6]} type={f[5]}>{f[5]==0 ? '.' : f[5]} </LiType>)}
        </LineType>
        <Line>
          {fw6.map(f => <Li key={f[6]} type={f[5]}>{f[3]==0 ? '.' : f[3] }</Li>)}
        </Line>
        <LineType>
          {fw6.map(f => <LiType key={f[6]} type={f[5]}>{f[5]==0 ? '.' : f[5]} </LiType>)}
        </LineType>
      </ul>
    </Container>
  );
}


