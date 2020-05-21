import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 50px auto;
  }
`;
