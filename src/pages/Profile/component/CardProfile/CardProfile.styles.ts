import styled from '@emotion/styled';
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #6c757d;
  & > span {
    color: #98a6ad;
    font-weight: 400;
  }
`;

export const InfoDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #6c757d;
  line-height: 2;
`;

export const ImageProfile = styled.img`
  border-radius: 50%;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMediaContent = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #000;
  line-height: 2;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialMediaLink = styled.a`
  display: flex;
`;

export const SocialMediaButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const IconFacebook = styled(BsFacebook)`
  color: #6c757d;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #4267b2;
  }
`;

export const IconGithub = styled(BsGithub)`
  color: #6c757d;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #000;
  }
`;

export const IconLinkedin = styled(BsLinkedin)`
  color: #6c757d;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #0a66c2;
  }
`;

export const IconTwitter = styled(BsTwitter)`
  color: #6c757d;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #1da1f2;
  }
`;

export const IconInstagram = styled(BsInstagram)`
  color: #6c757d;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #c32aa3;
  }
`;
