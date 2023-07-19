import { useState } from 'react';
import { CardProfile, CardProfileEdit, SkeletonProfile } from './component';
import { Content, ContentCard } from './Profile.styles';

const Profile: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {loading ? (
        <SkeletonProfile />
      ) : (
        <Content>
          <ContentCard>
            <CardProfile />
            <CardProfileEdit setLoading={setLoading} />
          </ContentCard>
        </Content>
      )}
    </>
  );
};

export default Profile;
