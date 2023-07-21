import { useState } from 'react';
import { Form, Content } from './ContactForm.styles';
import { useCreatedContact } from '../../../Header/hooks';

interface Props {
  isEditing?: boolean;
}

const ContactForm: React.FC<Props> = ({ isEditing }) => {
  const { createContact } = useCreatedContact();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    bio: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);

    try {
      await createContact({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        biography: formData.bio,
      });
    } catch (error) {
      console.error('Error al crear el contacto:', error);
    }
  };

  return (
    <Content>
      <h2>{isEditing ? 'Edit Contact' : 'Add Contact'}</h2>
      <Form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          required
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor='phone'>Phone</label>
        <input
          type='tel'
          id='phone'
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor='address'>Address</label>
        <input
          type='text'
          id='address'
          value={formData.address}
          onChange={handleChange}
        />
        <label htmlFor='bio'>Bio</label>
        <textarea
          id='bio'
          value={formData.bio}
          onChange={handleChange}
        />
        <button type='submit'>{isEditing ? 'Save Changes' : 'Save'}</button>
      </Form>
    </Content>
  );
};

export default ContactForm;
