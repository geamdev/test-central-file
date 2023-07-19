import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';
import { CardContainer, Links, Logout } from './Card.styles';
import supabase from '../../../../../../supabase/client';
import { useNavigate } from 'react-router-dom';

const Card: React.FC = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <CardContainer>
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
    </CardContainer>
  );
};

export default Card;
