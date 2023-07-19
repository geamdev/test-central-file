import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  border: 1px solid #ddd;
  margin-top: 20px;
  border-radius: 6px;
  @media (max-width: 480px) {
    width: 89%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 92%;
  }
`;

export const ContainerTitle = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 8px 22px;
  background-color: #fff;
  border-radius: 6px 6px 0 0;
`;

export const TableTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  & > span {
    margin-left: 10px;
    font-size: 0.8rem;
    background-color: #F3F4F8;
    color: #000;
    border-radius: 8px;
    padding: 3px 7px;
  }
`;
export const ContainerTable = styled.div`
  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

export const TableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-spacing: 2px;
  border-radius: 10px;
  padding: 20px;
`;
