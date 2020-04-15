import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;
    button {
      border: 0;
      background: none;
    }
    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
  ul {
  }
`;

export const Line = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: #FFF;
  opacity: 0.95;
  border-radius: 4px;
  margin: 10px 0;
  padding: 15px;
  li {
    span {
      padding: auto;
      font-weight: bold;
      width: 100%;
      background: none;
      margin: 0 2px;

    }
    div{
      margin: 0 2px;
    }
  }
`;

