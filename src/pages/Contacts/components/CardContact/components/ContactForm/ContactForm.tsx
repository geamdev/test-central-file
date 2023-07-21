import { Form, Content } from './ContactForm.styles';

const ContactForm: React.FC = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Content>
      <h2>Edit Contact</h2>
      <Form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' required />
        <label htmlFor='phone'>Phone</label>
        <input type='tel' id='phone' required/>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' />
        <label htmlFor='address'>Address</label>
        <input type='text' id='address' />
        <label htmlFor='bio'>Bio</label>
        <textarea id='bio' rows={3} />
        <button type='submit'>Save</button>
      </Form>
    </Content>
  );
};

export default ContactForm;
