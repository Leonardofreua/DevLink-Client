import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-right: -5px;
  max-width: 330px;
  border-radius: 7px;
  border: 1px solid #dcdce6;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.75);
  padding: 20px;

  @media (max-width: 1000px) {
    margin: 0 auto;
  }

  div:first-of-type {
    text-align: center;
    padding: 30px 0 20px;
    border-bottom: 1px solid #dcdce6;

    a {
      font-weight: 400;
      color: #187026;
      text-decoration: none;
      opacity: 0.9;
    }

    a:hover {
      opacity: 1;
    }
  }

  div:nth-of-type(2) {
    margin-top: 30px;
    text-align: center;
    font-weight: 400;

    a {
      display: block;
      color: #187026;
      font-weight: bold;
      text-decoration: none;
      opacity: 0.7;
    }

    a:hover {
      opacity: 1;
    }
  }
`;
