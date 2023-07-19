import styled from '@emotion/styled';
interface ContentProps {
  width: string;
}

export const ContainerStyled = styled.div`
  width: 98%;
  margin: 0 15px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 15px;
  gap: 15px;
`;

export const Content = styled.div<Partial<ContentProps>>`
  width: ${({ width }) => width};
`;
