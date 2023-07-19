import styled from '@emotion/styled';

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  padding: 15px;
  background-color: #fff;
  border-radius: 0 0 6px 6px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #000;
  }
  &:disabled {
    width: 30px;
    height: 30px;
    color: #6d6d6d;
    background-color: #f9fafc;
    border-radius: 3px;
    cursor: not-allowed;
  }
`;

export const ButtonText = styled.button`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    color: #000;
  }
  &:disabled {
    color: #6d6d6d;
    cursor: not-allowed;
    padding: 5px 10px;
    border-radius: 10px;
  }
  & > svg {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    & > span {
      display: none;
    }
    & > svg {
      font-size: 20px;
    }
  }
`;
