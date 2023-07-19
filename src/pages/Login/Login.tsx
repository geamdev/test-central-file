import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';

import supabase from '../../supabase/client';
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    console.log(data);
    navigate('/');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        navigate('/');
      }
    };
    getUser();
  }, [navigate]);

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
