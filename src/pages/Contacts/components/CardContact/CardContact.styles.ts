import { FaUserCircle } from 'react-icons/fa';
import styled from '@emotion/styled';

export const CardContactContainer = styled.div`
  width: fit-content;
  height: fit-content;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  padding: 1rem 4rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContact = styled(FaUserCircle)`
  width: 5rem;
  height: 5rem;
  margin: 0;
  fill: #7f56d9;
`;

export const NameContact = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`;

export const ButtonAction = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  & > svg {
    width: 1.2rem;
    height: 1.2rem;
  }
  &:hover {
    & > svg {
      fill: #6a4bc9;
    }
  }
`;