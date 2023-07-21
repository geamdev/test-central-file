import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../../redux/reducers/userSlice/userSlice';
import { Card } from '../../../../components';
import {
  Form,
  Fieldset,
  Legend,
  Button,
  Label,
  Textarea,
} from './CardProfileEdit.styles';
import { User } from '../../../../interfaces';
import axios from 'axios';

interface CardProfileEditProps {
  setLoading: (loading: boolean) => void;
}

const CardProfileEdit: React.FC<CardProfileEditProps> = ({ setLoading }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: { user: User }) => state.user);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...userData, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setLoading(true);

    try {
      // await updateUser({
      //   name: `${userData.firstName} ${userData.lastName}`,
      //   email: userData.email,
      //   password: userData.password,
      //   idProfile: userData.idProfile,
      // });
      const updateUserData = {
          name: `${userData.firstName} ${userData.lastName}`,
          email: userData.email,
          password: userData.password,
          idProfile: userData.idProfile,
        }; 

        const options = {
          method: 'PUT',
          url: 'https://localhost:7005/api/UserData/Update/E009B990-B313-4516-9669-E581FEDAD958',
          headers: {'Content-Type': 'application/json'},
          data: updateUserData
        };

        axios.request(options).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
          console.error(error);
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
              value={userData.phone}
              onChange={handleChange}
              name='phone'
            />
            <span>Phone</span>
          </label>

          <Label>
            <Textarea
              required
              rows={3}
              placeholder=''
              value={userData.bio}
              onChange={handleChange}
              name='bio'
            />
            <span>Bio</span>
          </Label>

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
