import styled from 'styled-components';
import search from '~/assets/search-24px.svg';
import { darken} from 'polished';

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
    background: yellow;
    border-radius: 14px;
    padding: 14px;
    margin-bottom: 10px;
    div {
      display: flex;
      flex-direction: column;
      width: 80%;
      strong {
      text-align: center;
      font-size: 24px;
      margin: 25px 0;
      }
      div.content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: left;
        margin: 5px 0;
        background: #999;
        div.subcontent {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: auto;
          margin: auto;
          div.tagcontent {
            width: 50%;
            height: auto;
            background: blue;
            display: flex;
            flex-direction: row;

            strong {
              text-align: left;
              font-size: 18px;
              margin: auto 5px;
              background: yellow;
            }
            span {
              text-align: left;
              font-size: 18px;
              background: yellow;
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
    }
  }
  ul {
    width: auto;
    background: lightgreen;
    align-self: center;
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

