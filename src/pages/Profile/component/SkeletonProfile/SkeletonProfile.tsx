import Skeleton from '@mui/material/Skeleton';
import {
  Container,
  ContainerSocialMedia,
  ContentCard,
  ContentImage,
  SocialMedia,
  ContentEdit,
  ContentIntro,
} from './SkeletonProfile.styles';
import { Card } from '../../../../components';

const SkeletonProfile: React.FC = () => {
  return (
    <Container>
      <ContentIntro>
        <Skeleton variant='text' width='25%' height='16px' />
        <Skeleton variant='text' width='75%' height='16px' />
      </ContentIntro>
      <ContentCard>
        <Card width='100%'>
          <ContentImage>
            <Skeleton variant='circular' width='100px' height='100px' />
            <Skeleton variant='text' width='200px' height='16px' />
          </ContentImage>
          <Skeleton variant='text' width='100%' height='100px' />
          <ContainerSocialMedia>
            <Skeleton variant='text' width='25%' height='16px' />
            <SocialMedia>
              <Skeleton variant='circular' width='40px' height='40px' />
              <Skeleton variant='circular' width='40px' height='40px' />
              <Skeleton variant='circular' width='40px' height='40px' />
              <Skeleton variant='circular' width='40px' height='40px' />
              <Skeleton variant='circular' width='40px' height='40px' />
            </SocialMedia>
          </ContainerSocialMedia>
        </Card>
        <Card width='100%'>
          <>
            <Skeleton variant='text' width='25%' height='20px' />
            <ContentEdit>
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    variant='rounded'
                    width='100%'
                    height='50px'
                  />
                ))}
              <Skeleton variant='rounded' width='100%' height={110} />
            </ContentEdit>
            <Skeleton variant='rounded' width='100%' height='45px' />
          </>
        </Card>
      </ContentCard>
    </Container>
  );
};

export default SkeletonProfile;
