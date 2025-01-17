import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 330px;
  margin: auto;
  margin-right: -5px;
  border-radius: 7px;
  border: 1px solid #dcdce6;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.75);
  padding: 20px;

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;

export const Divisor = styled.div`
  position: relative;
  text-align: center;
  margin: 20px 0 -15px 0;
  line-height: 14px;
  font-size: 14px;
  color: #aaa;
`;
