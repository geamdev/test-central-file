import { useState } from 'react';
import { Header } from '../../components';

import supabase from '../../supabase/client';
import {
  ButtonStyled,
  ContainerInput,
  LabelForm,
  LoginContainer,
  LoginTitle,
  ParagraphLogin,
} from './Register.styles';

const Register: React.FC = () => {
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!names || !email || !password || !passwordConfirmation) {
      alert('Please fill all the fields');
      return;
    }

    if (password !== passwordConfirmation) {
      alert('Passwords do not match');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          names,
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    console.log(data);
    alert('Check your email for the confirmation link');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNames(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPasswordConfirmation(e.target.value);
  };

  return (
    <>
      <Header />
      <LoginContainer className='form' onSubmit={handleSubmit}>
        <LoginTitle className='signup'>Create an account</LoginTitle>

        <ParagraphLogin>Start your 30-day free trial.</ParagraphLogin>

        <ContainerInput>
          <LabelForm htmlFor='name'>Name*</LabelForm>
          <input
            type='text'
            value={names}
            placeholder='Your name'
            autoComplete='off'
            onChange={handleNameChange}
          />
        </ContainerInput>

        <ContainerInput>
          <LabelForm htmlFor='email'>Email*</LabelForm>
          <input
            type='email'
            value={email}
            placeholder='Email address'
            autoComplete='off'
            onChange={handleEmailChange}
          />
        </ContainerInput>

        <ContainerInput>
          <LabelForm htmlFor='password'>Password*</LabelForm>
          <input
            value={password}
            type='password'
            placeholder='Password'
            autoComplete='off'
            onChange={handlePasswordChange}
          />
        </ContainerInput>

        <ContainerInput>
          <LabelForm htmlFor='passwordConfirmation'>
            Confirm password*
          </LabelForm>
          <input
            value={passwordConfirmation}
            type='password'
            placeholder='Confirm password'
            autoComplete='off'
            onChange={handlePasswordConfirmationChange}
          />
        </ContainerInput>

        <ButtonStyled type='submit'>Get started</ButtonStyled>
      </LoginContainer>
    </>
  );
};

export default Register;
