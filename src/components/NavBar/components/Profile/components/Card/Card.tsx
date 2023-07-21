import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';
import { CardContainer, Links, Logout } from './Card.styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { User } from '../../../../../../interfaces';

const Card: React.FC = () => {
  const userData = useSelector((state: { user: User }) => state.user);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <CardContainer>
      {userData.profileName === 'Admin' ? (
        <>
          <Links to={'/'}>
            <AiOutlineHome />
            <span>Home</span>
          </Links>
          <Links to={'/profile'}>
            <AiOutlineUser />
            <span>Profile</span>
          </Links>
          <Links to={'/contacts'}>
            <IoMdContacts />
            <span>Contacts</span>
          </Links>
          <Logout color='red' onClick={handleLogOut}>
            <RiLogoutCircleRLine />
            <span>Logout</span>
          </Logout>
        </>
      ) : (
        <>
          <Links to={'/'}>
            <AiOutlineUser />
            <span>Home</span>
          </Links>
          <Links to={'/contacts'}>
            <IoMdContacts />
            <span>Contacts</span>
          </Links>
          <Logout color='red' onClick={handleLogOut}>
            <RiLogoutCircleRLine />
            <span>Logout</span>
          </Logout>
        </>
      )}
    </CardContainer>
  );
};

export default Card;
