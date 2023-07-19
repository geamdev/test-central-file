import styled from "@emotion/styled";

interface ICardContainerProps {
  width?: string;
  line?: boolean;
}

export const CardContainer = styled.div<Partial<ICardContainerProps>>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || '50%'};
  height: fit-content;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
  border-top: ${({ line }) => line ? '2px solid #4c6c9d' : 'none'};
  @media (max-width: 768px) {
    width: 100%;
  }
`;