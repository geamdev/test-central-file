import styled from '@emotion/styled';

export const HeaderProfile = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1.5rem;
  gap: 1rem;
`;

export const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #e9ecef;
  & > span {
    margin-left: 1rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
  & > svg {
    color: #e9ecef;
    cursor: pointer;
    margin-left: 5px;
    &:hover {
      color: #108fd8;
    }
    @media (max-width: 768px) {
      margin-left: 10px;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    font-size: 1.5rem;
  }
`;
