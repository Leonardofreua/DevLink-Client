import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 3px solid #95979c;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
