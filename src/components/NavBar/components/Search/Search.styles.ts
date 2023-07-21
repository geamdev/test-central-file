import { FiSearch } from 'react-icons/fi';
import styled from '@emotion/styled';

export const HeaderSearch = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1.5rem;
`;

export const SearchStyle = styled.div`
  width: 40%;
  height: 60%;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  @media (max-width: 480px) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 70%;
  }
`;

export const SearchStyleResponsive = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    width: 100%;
    position: relative;
    left: -10px;
  }
`;

export const Icon = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  cursor: text;
`;

export const IconResponsive = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

export const IconSearch = styled(FiSearch)`
  color: #000;
  @media (max-width: 480px) {
    color: #e9ecef;
  }
`;

export const TextIcon = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  margin-left: 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0.7rem;
`;
