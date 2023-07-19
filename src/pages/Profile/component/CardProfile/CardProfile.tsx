import { useSelector } from 'react-redux';
import { Card } from '../../../../components';
import {
  Content,
  Info,
  InfoDescription,
  ImageProfile,
  SocialMediaContainer,
  SocialMedia,
  SocialMediaButton,
  SocialMediaLink,
  IconGithub,
  IconFacebook,
  IconTwitter,
  IconInstagram,
  IconLinkedin,
  SocialMediaContent,
} from './CardProfile.styles';

const CardProfile: React.FC = () => {
  const userData = useSelector((state: { user: any }) => state.user);

  return (
    <Card>
      <Content>
        <ImageProfile
          src=''
          alt='Profile'
          width={100}
          height={100}
        />
        <Info>
          {userData.firstName} / FrontEnd Developer
        </Info>
      </Content>
      <InfoDescription>asd</InfoDescription>
      <SocialMediaContainer>
        <SocialMediaContent>Follow {userData.firstName} On</SocialMediaContent>
        <SocialMedia>
          <SocialMediaButton>
            <SocialMediaLink
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <IconFacebook />
            </SocialMediaLink>
          </SocialMediaButton>

          <SocialMediaButton>
            <SocialMediaLink
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <IconTwitter />
            </SocialMediaLink>
          </SocialMediaButton>

          <SocialMediaButton>
            <SocialMediaLink
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <IconGithub />
            </SocialMediaLink>
          </SocialMediaButton>

          <SocialMediaButton>
            <SocialMediaLink
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <IconInstagram />
            </SocialMediaLink>
          </SocialMediaButton>

          <SocialMediaButton>
            <SocialMediaLink
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <IconLinkedin />
            </SocialMediaLink>
          </SocialMediaButton>
        </SocialMedia>
      </SocialMediaContainer>
    </Card>
  );
};

export default CardProfile;
