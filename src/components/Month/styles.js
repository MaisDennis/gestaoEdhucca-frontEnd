import styled from 'styled-components';

export const Container = styled.div`
ul {
  display: flex;
  flex-direction: column;
}
`;

export const Line = styled.li`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  li {
    width: 25px;
    padding: 6px;
    margin: 1px;
    background: #fff;
    border-radius: 50%;
  }
`;

export const LineType = styled.li`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  background: #fff;
`;

export const Li = styled.li`
 width: 25px;
    padding: 6px;
    margin: 1px;
    background: ${props => (props.type == 0 ? '#fff' : 'lightgreen')};
    color: ${props => (props.type == 0 ? '#fff' : '#111')};
    border-radius: 50%;
`;
