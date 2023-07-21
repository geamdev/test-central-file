import { useState } from 'react';
import { useFetchAndLoad } from '../../../../hooks';
import { userCreatedService } from '../../../../services';
import { userAdapter } from '../../../../adapters';

const useRegisterUser = () => {
  const { callEndpoint } = useFetchAndLoad();
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const registerUser = async (data: {
    name: string;
    email: string;
    password: string;
    idProfile: string;
  }) => {
    try {
      const rawResponse = await callEndpoint(userCreatedService(data));
      const sanitizedResponse = userAdapter(rawResponse);
      setIsRegistered(sanitizedResponse.result || null);
    } catch (error) {
      console.log(error);
    }
  };

  return { isRegistered, registerUser };
};

export default useRegisterUser;
