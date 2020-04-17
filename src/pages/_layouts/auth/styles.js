import styled from 'styled-components';
import { darken } from 'polished';
export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #0077b3, #a7cfcb);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  text-align: center;
  div {
    img {
      border-radius: 25%;
      box-shadow: 3px 3px 3px #222;
      opacity: 1;
      width: auto;
      height: auto;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: center;
    align-items: center;

    input {
      background: rgba(0,0,0,0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 280px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255,255,255,0.7);
      }
    }
    button {
      margin: 5px 0 0;
      padding: 0 15px;
      height: 44px;
      width: 200px;
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
    a {
      color: #FFF;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &hover {
        opacity: 1;
      }
    }
    span {
      color: #ffdd33;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }
`;
