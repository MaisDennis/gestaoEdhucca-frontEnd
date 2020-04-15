import styled from 'styled-components';

export const Container = styled.div`
ul {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}
`;

export const Line = styled.li`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  li {
    width: 27px;
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

export const LiType = styled.li`
  width: 25px;
  padding: 4px;
  margin: 1px;
  border-radius: 4px;
  text-align: center;
  background: ${props => (props.type == 0 || props.type == 'W'  ? '#f6f4f1' : '')};
  background: ${props => (props.type == 'T' ? '#5edc1f' : '')};
  background: ${props => (props.type == 'R' ? '#f3c775' : '')};
  background: ${props => (props.type == 'P' ? '#50a7d9' : '')};
  background: ${props => (props.type == 'FI' ? '#fff44f' : '')};
  background: ${props => (props.type == 'FC' ? '#eee78e' : '')};
  color: ${props => (props.type == 0 || props.type == 'W' ? '#f6f4f1' : '')};
`;

export const Li = styled.li`
  color: ${props => (props.type == 'W' ? '#c8c7c5' : '')};
`;
