import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface ILinkProps {
  color?: string;
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 3.5rem;
  right: 15px;
  width: 185px;
  height: fit-content;
  padding: 1.3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media (max-width: 480px) {
    top: 3.4rem;
    right: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    right: 10px;
  }
`;

export const Links = styled(Link)<Partial<ILinkProps>>`
  display: flex;
  text-decoration: none;
  color: #000;
  gap: 0.5rem;
  & > svg {
    color: ${({ color }) => color};
  }
  & > span {
    color: ${({ color }) => color};
  }
`;

export const Logout = styled.button`
  padding: 0;
  display: flex;
  border: none;
  background-color: transparent;
  color: #000;
  gap: 0.5rem;
  & > svg {
    color: ${({ color }) => color};
  }
  & > span {
    color: ${({ color }) => color};
  }
`;
