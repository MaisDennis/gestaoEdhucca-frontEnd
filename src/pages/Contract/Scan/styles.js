import styled from 'styled-components';
import { darken} from 'polished';

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding-bottom: 30px;
  h2 {
      font-weight: bold;
      color: #fff;
      text-align: center;
      margin-bottom: 15px;
    }
  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    padding: 14px;
    margin-bottom: 10px;
    a {
      color: #FFF;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &hover {
        opacity: 1;
      }
    }
  }
`;

export const Body = styled.div`
div.d1 {
    display: ${props => props.visible ? 'flex' : 'none'};
    flex-direction: column;
    width: 70%;
    align-items: center;
    margin: 5px 0 0 200px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 3px 3px 3px #222;
    div.d2 {
      display: flex;
      flex-direction: row;
      width: 80%;
      height: 100%;
      margin: 5px 0;
      border-radius: 4px;
      padding: 10px;
      div.d3 {
        width: 100%;
        height: 24px;
        display: flex;
        flex-direction: row;
        margin: 5px 15px;
        strong {
          text-align: left;
          font-size: 18px;
          margin: auto 5px;
          color: #25415d;
        }
        span {
          text-align: left;
          font-size: 18px;
          margin: auto 5px;
          color: #25415d;
        }
      }
    }
  }
`;

