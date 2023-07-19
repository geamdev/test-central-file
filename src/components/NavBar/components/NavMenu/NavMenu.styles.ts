import styled from '@emotion/styled';

export const ContentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

export const IconOpen = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 1rem;
  cursor: pointer;
`;
