import { useState } from 'react';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { HeaderContainer } from './Header.styles';
import { ContactModal } from '..';
import { ContactAdd } from './components';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  return (
    <HeaderContainer>
      <div>
        <h2>Contacts</h2>
      </div>
      <button onClick={openModal}>
        <AiOutlineUserAdd />
      </button>
      <ContactModal showModal={showModal} onClose={() => setShowModal(false)}>
        <ContactAdd />
      </ContactModal>
    </HeaderContainer>
  );
};

export default Header;
