import styled from '@emotion/styled';

export const CardContainer = styled.div`
  position: absolute;
  top: 7%;
  left: 2%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 100;
  width: 21.7%;
  max-height: 300px;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  @media (max-width: 480px) {
    left: 5%;
    width: 50%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    left: 5%;
    width: 35%;
  }
`;
