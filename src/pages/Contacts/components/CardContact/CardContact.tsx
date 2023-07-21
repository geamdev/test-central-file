import { useState } from 'react';

import { MdContacts } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineUserDelete } from 'react-icons/ai';

import { ContactDetails, ContactForm } from './components';
import { ContactModal } from '..';
import {
  CardContactContainer,
  ImageContact,
  NameContact,
  ActionsContainer,
  ButtonAction,
} from './CardContact.styles';

const CardContact: React.FC = () => {
  const [state, setState] = useState({
    showModalDetail: false,
    showModalEdit: false,
  });

  const showContact = () => {
    setState({ ...state, showModalDetail: true });
  };

  const editContact = () => {
    setState({ ...state, showModalEdit: true });
  };

  const deleteContact = () => {
    console.log('Delete');
  };

  return (
    <CardContactContainer>
      <ImageContact />
      <NameContact>John Doe</NameContact>
      <ActionsContainer>
        <ButtonAction onClick={showContact}>
          <MdContacts />
        </ButtonAction>
        <ButtonAction onClick={editContact}>
          <BiEdit />
        </ButtonAction>
        <ButtonAction onClick={deleteContact}>
          <AiOutlineUserDelete />
        </ButtonAction>
      </ActionsContainer>
      <ContactModal
        showModal={state.showModalDetail}
        onClose={() => setState({ ...state, showModalDetail: false })}
      >
        <ContactDetails />
      </ContactModal>
      <ContactModal
        showModal={state.showModalEdit}
        onClose={() => setState({ ...state, showModalEdit: false })}
      >
        <ContactForm isEditing={true} />
      </ContactModal>
    </CardContactContainer>
  );
};

export default CardContact;
