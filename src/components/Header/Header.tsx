import { useNavigate } from 'react-router-dom';
import { ContainerHeader, PStyled } from './Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';
  const linkText = isLogin ? 'Sign up' : 'Log in';
  const text = isLogin ? 'Don’t have an account?' : 'Already have an account?';

  return (
    <ContainerHeader>
      <PStyled>
        {text}
        <span onClick={() => navigate(isLogin ? '/register' : '/login')}>
          {linkText}
        </span>
      </PStyled>
    </ContainerHeader>
  );
};

export default Header;
