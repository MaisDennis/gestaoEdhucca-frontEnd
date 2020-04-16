import styled from 'styled-components';
import { darken} from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    div {
      padding: auto;
      display: flex;
      flex-direction: row;
      button {
      border: 0;
      background: none;
      padding: auto;
      }
      div {
        margin: auto;
        strong {
          color: #fff;
          font-size: 24px;
          margin: 0 15px;
        }
      }

    }
    div {
      a {
        button {
          margin: 5px 0 0;
          height: 44px;
          width: 200px;
          background: #ffdd33;
          font-weight: bold;
          color: #fff;
          border: 0;
          border-radius: 4px;
          font-size: 16px;
          transition: background 0.2s;
          &:hover {
            background: ${darken(0.05, '#eac853')};
          }
        }
      }
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

