import { AiOutlineUserAdd } from 'react-icons/ai';
import { HeaderContainer } from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>
        <h2>Contacts</h2>
      </div>
      <button>
        <AiOutlineUserAdd />
      </button>
    </HeaderContainer>
  );
};

export default Header;
