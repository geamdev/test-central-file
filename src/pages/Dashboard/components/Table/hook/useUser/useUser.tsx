import { useState, useEffect } from 'react';
import { useFetchAndLoad } from '../../../../../../hooks';

import { User } from '../../../../../../interfaces';
import { getDataUser } from '../../../../../../services';
import { userAdapter } from '../../../../../../adapters';

const useUsers = () => {
  const { callEndpoint, loading } = useFetchAndLoad();
  const [users, setUsers] = useState<User[]>([]);

  const getData = async () => {
    try {
      const rawResponse = await callEndpoint(getDataUser());
      const sanitizedResponse = userAdapter(rawResponse);
      setUsers(sanitizedResponse.result || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { users, getData, loading };
};

export default useUsers;
