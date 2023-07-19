import styled from '@emotion/styled';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
`;

export const ContentCard = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  @media (max-width: 480px) {
    width: 87%;
    flex-direction: column;
  }
    @media (min-width: 481px) and (max-width: 768px) {
      width: 92%;
    flex-direction: column;
  }
`;
