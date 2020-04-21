
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  height: auto;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background: #F5F5F5;
  border-radius: 14px;
  padding-bottom: 30px;
  header {
    width: 100%;
    height: auto;
    display: flex;
    align-self: center;
    flex-direction: row;
    border-radius: 14px;
    padding: 14px;
    margin-bottom: 10px;
    div {
      display: flex;
      flex-direction: column;
      width: 80%;
      strong {
      text-align: left;
      font-size: 24px;
      margin: 15px 5px;
      }
      div.content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: left;
        margin: 5px 0;
        div.subcontent {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: auto;
          margin: auto;
          div.tagcontent {
            width: 50%;
            height: auto;
            display: flex;
            flex-direction: row;
            margin: 5px 0;
            strong {
              text-align: left;
              font-size: 18px;
              margin: auto 5px;
            }
            span {
              text-align: left;
              font-size: 18px;
              margin: auto 5px;
            }
          }
        }
      }
    }
    img {
      width: auto;
      height: 100%;
      margin: auto;
      border-radius: 4px;
    }
  }
  ul {
    width: auto;
    align-self: center;
  }
  div {
    margin: auto;
    div {
      margin: auto;
      span {
        font-size: 12px;
      }
    }
  }
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin: 15px 0;
    padding: 0 10px;
    font-size: 18px;
    div {
      display: flex;
      flex-direction: column;
      width: 50%;
      span {
        font-weight: bold;
        margin: 5px 0;
      }
      div {
        display: flex;
        flex-direction: row;
        align-items: left;
        margin: 5px 0;
        span {
          font-weight: normal;
          width: 70px;
          margin-right: 25px;
        }
      }
    }
  }
`;

export const Line = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: #FFF;
  margin: auto;
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
