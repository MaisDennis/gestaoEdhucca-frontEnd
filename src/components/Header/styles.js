import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  box-shadow: 3px 3px 3px #fff;
`;

export const Content = styled.div `
  height: 100px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      height: 100px;
      width: auto;
    }
    ul {
      li {
        display: inline;
        a {
          font-weight: bold;
          font-size: 15px;
          color: #25415d;
          text-transform: uppercase;
          text-align: center;
          padding: 0 10px;
          &:hover {
            color: ${darken(0.05, '#a7cfcb')};
          }
        }
      }
    }
  }

 aside {
      display: flex;
      align-items: center;
    }
`;
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
      font-size: 14px;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #25415d;
      &:hover {
        color: ${darken(0.05, '#a7cfcb')};
      }
    }
  }
  img {
    height: 32px;
    border-radius: 50%;
  }
`;
