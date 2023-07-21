import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Card } from './components';
import { CgProfile } from 'react-icons/cg';
import { HeaderProfile, ProfileSection, Avatar } from './Profile.styles';

const Profile: React.FC = () => {
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const userData = useSelector((state: { user: any }) => state.user);

  const showModal = () => setShow(!show);

  useEffect(() => {
    const handleClickOutsideModal = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener('click', handleClickOutsideModal);
    }

    return () => {
      document.removeEventListener('click', handleClickOutsideModal);
    };
  }, [show]);

  return (
    <HeaderProfile>
      <ProfileSection onClick={showModal} ref={modalRef}>
        <span>{userData.firstName} {userData.lastName}</span>
        <Avatar>
          <CgProfile />
        </Avatar>
        {show && <Card />}
      </ProfileSection>
    </HeaderProfile>
  );
};

export default Profile;
