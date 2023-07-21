import { useState } from 'react';
import { useFetchAndLoad } from '../../../../../../hooks';
import { contactCreatedService } from '../../../../../../services';
import { contactAdapter } from '../../../../../../adapters';

const useContactCreated = () => {
  const { callEndpoint } = useFetchAndLoad();
  const [response, setResponse] = useState(null);

  const createContact = async (data: {
    name: string;
    email: string;
    phone: string;
    biography: string;
  }) => {
    try {
      const rawResponse = await callEndpoint(contactCreatedService(data));
      const sanitizedResponse = contactAdapter(rawResponse);
      setResponse(sanitizedResponse.result || null);
    } catch (error) {
      console.log(error);
    }
  };

  return { response, createContact };
};

export default useContactCreated;
