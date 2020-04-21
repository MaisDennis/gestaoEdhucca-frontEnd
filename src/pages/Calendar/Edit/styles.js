import styled from 'styled-components';
import { darken} from 'polished';
import { Select as bySelect } from '@rocketseat/unform';

export const Select =styled(bySelect)`
  background: rgba(0,0,0,0.1);
  border: 0;
  border-radius: 4px;
  height: 44px;
  width: 100%;
  padding: 0 15px;
  color: #fff;
  margin: 0 0;
  justify-content: space-between;
  &::placeholder {
    color: rgba(255,255,255,0.7);
  };
`;

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
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
  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    input {
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      background: rgba(0,0,0,0.1);
      color: #fff;
      &::placeholder {
        color: rgba(255,255,255,0.7);
      }
    }
    div.content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div.subcontent {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-self: center;
        justify-content: space-between;
        div.tagcontent {
          display: flex;
        flex-direction: column;
        width: 49%;
        }
        div.datecontent {
          display: flex;
        flex-direction: column;
        width: 24%;
        }
      }
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(255,255,255,0.2);
      margin: 10px 0 20px;
    }
    span {
      display: inline;
      font-weight: bold;
      color: #25415d;
      text-transform: uppercase;
      text-align: left;
      margin-bottom: 5px;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #25415d;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.05, '#25415d')};
      }
    }
  }
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
    div {
      margin: 0 2px;
    }
  }
`;

