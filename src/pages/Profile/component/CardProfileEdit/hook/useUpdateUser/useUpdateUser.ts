import { useState } from 'react';
import { useFetchAndLoad } from '../../../../../../hooks';
import { userUpdateService } from '../../../../../../services';
import { userAdapter } from '../../../../../../adapters';
import { User } from '../../../../../../interfaces';

const useUpdateUser = () => {
  const { callEndpoint } = useFetchAndLoad();
  const [updateStatus, setUpdateStatus] = useState<User[]>([]);

  const updateUser = async (userData: {
    name: string;
    email: string;
    password: string;
    idProfile: string;
  }) => {
    try {
      const rawResponse = await callEndpoint(userUpdateService(userData));
      const sanitizedResponse = userAdapter(rawResponse);
      setUpdateStatus(sanitizedResponse.result || []);
    } catch (error) {
      console.log(error);
    }
  };

  return { updateStatus, updateUser };
};

export default useUpdateUser;
