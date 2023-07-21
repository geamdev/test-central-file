import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const ContentImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const ContentEdit = styled.div`
  display: flex;
  margin: 1.3em 0;
  flex-direction: column;
  gap: 0.7rem;
`;

export const ContentCard = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
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

export const ContainerSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 0.8rem;
`;
