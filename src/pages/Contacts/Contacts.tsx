import { Header, CardContact } from './components';
import { Content } from './Contacts.styles';

const Contacts: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <CardContact />
        <CardContact />
      </Content>
    </>
  );
};

export default Contacts;
