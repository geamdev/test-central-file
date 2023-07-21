import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';

import { useLoginUser } from './hook';
import {
  ButtonStyled,
  ContainerInput,
  LabelForm,
  LinkStyled,
  LoginContainer,
  LoginTitle,
  ParagraphLogin,
} from './Login.styles';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loginUser } = useLoginUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill all the fields');
      return;
    }
    try {
      const data = await loginUser(email, password);
      if (data) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
      } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <>
      <Header />
      <LoginContainer className='form' onSubmit={handleSubmit}>
        <LoginTitle>Log in to your account</LoginTitle>
        <ParagraphLogin>
          Welcome back! Please enter your details.
        </ParagraphLogin>

        <ContainerInput>
          <LabelForm htmlFor='email'>Email</LabelForm>
          <input
            type='email'
            value={email}
            placeholder='Email address'
            autoComplete='off'
            onChange={handleEmailChange}
          />
        </ContainerInput>

        <ContainerInput>
          <LabelForm htmlFor='password'>Password</LabelForm>
          <input
            value={password}
            type='password'
            placeholder='Password'
            autoComplete='off'
            onChange={handlePasswordChange}
          />
        </ContainerInput>
        <LinkStyled>Forgot password</LinkStyled>
        <ButtonStyled type='submit'>Sign In</ButtonStyled>
      </LoginContainer>
    </>
  );
};

export default Login;
