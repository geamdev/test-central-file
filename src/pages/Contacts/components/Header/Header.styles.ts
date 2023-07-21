import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;

  & > button {
    background: none;
    border: none;
    cursor: pointer;
    & > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
