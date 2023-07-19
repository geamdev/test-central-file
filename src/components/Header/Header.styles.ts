import styled from '@emotion/styled';

export const ContainerHeader = styled.div`
  display: flex;
  height: 72px;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 96px;
  padding-right: 10px;
`;

export const PStyled = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
  margin: 0px;
  & > span {
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
    margin-left: 4px;
    line-height: 24px;
    color: #6941c6;
  }
`;
