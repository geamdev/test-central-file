import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../../redux/reducers/userSlice/userSlice';
import { Card } from '../../../../components';
import { Form, Fieldset, Legend, Button } from './CardProfileEdit.styles';
import supabase from '../../../../supabase/client';
import { useUserProfile } from '../../../../hooks';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface CardProfileEditProps {
  setLoading: (loading: boolean) => void;
}

const CardProfileEdit: React.FC<CardProfileEditProps> = ({ setLoading }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: { user: User }) => state.user);
  useUserProfile();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...userData, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setLoading(true);

    try {
      await supabase.auth.updateUser({
        data: {
          names: `${userData.firstName} ${userData.lastName}`,
          phone: userData.phone,
        },
      });

      console.log('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Legend>Edit Profile</Legend>
          <label>
            <input
              required
              placeholder=''
              type='text'
              value={userData.firstName}
              onChange={handleChange}
              name='firstName'
            />
            <span>First name</span>
          </label>

          <label>
            <input
              required
              placeholder=''
              type='text'
              value={userData.lastName}
              onChange={handleChange}
              name='lastName'
            />
            <span>Last name</span>
          </label>

          <label>
            <input
              required
              placeholder=''
              type='email'
              value={userData.email}
              onChange={handleChange}
              name='email'
            />
            <span>Email</span>
          </label>

          <label>
            <input
              required
              placeholder=''
              type='tel'
              onChange={handleChange}
              name='phone'
            />
            <span>Phone</span>
          </label>

          <Button type='submit'>
            <span />
            <span>Save Changes</span>
            <span />
            <span />
          </Button>
        </Fieldset>
      </Form>
    </Card>
  );
};

export default CardProfileEdit;
