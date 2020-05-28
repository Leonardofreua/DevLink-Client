import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const SubmitButton = styled.button`
  width: 100%;
  height: 47px;
  background: #28a745;
  border: 0;
  border-radius: 7px;
  color: #fff;
  margin-top: 30px;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  line-height: 47px;
  transition: background 0.6s;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    background: ${darken(0.06, '#28a745')};
  }

  span {
    margin-top: 5px;
  }
`;

export const GithubLoginButton = styled(Link)`
  width: 100%;
  height: 47px;
  background: #5c5c5c;
  border: 0;
  border-radius: 7px;
  color: #fff;
  margin-top: 18px;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  line-height: 47px;
  text-decoration: none;
  transition: background 0.4s;

  &:hover {
    text-decoration: none;
    color: #fff;
  }

  svg {
    vertical-align: middle;
  }

  &:hover {
    background: ${darken(0.03, '#5C5C5C')};
  }
`;
