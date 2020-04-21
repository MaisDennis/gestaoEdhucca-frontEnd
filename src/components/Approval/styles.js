import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken} from 'polished';

export const Action = styled(Link)`
  color: #fff;
  font-weight: bold;
  & + div {
    border-top: 1px solid rgba(255,255,255,0.1);
    border-bottom: 1px;
  }
  span {
    border-top: 1px solid rgba(255,255,255,0.1);
    border-bottom: 1px;
  }
`;

export const Container = styled.div`
  position: relative;
  button {
    margin: auto;
    padding: 6px 10px;
    height: auto;
    background: #25415d;
    font-weight: normal;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.05, '#25415d')};
    }
  }
`;

export const ActionList = styled.div`
  position: absolute;
  width: 120px;
  height: 100px;
  left: calc(50% + 75px);
  top: calc(100% - 65px);
  background: rgba(0,0,0,0.6);
  border-radius: 4px;
  padding: 20px;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 80px);
    top: 40px;
    width: 0;
    height: 0;
    border-top: 20px solid rgba(0,0,0,0.6);
    border-left: 20px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 20px solid transparent;
  }
`;
