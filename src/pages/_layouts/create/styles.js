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
  max-width: 600px;
  margin: 50px auto;
  h2 {
    font-weight: bold;
    color: #25415d;
    text-align: left;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    input {
      background: rgba(0,0,0,0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255,255,255,0.7);
      }
    }
    div.content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      div.subcontent {
        width: 49%;
        margin-bottom: 15px;

        display: flex;
        align-self: center;
      }
    }


    span {
      color: #fb6c91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(255,255,255,0.2);
      margin: 10px 0 20px;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      width: 100%;
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

  button.List {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #ffdd33;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.01, '#eac853')};
    }
  }
`;
