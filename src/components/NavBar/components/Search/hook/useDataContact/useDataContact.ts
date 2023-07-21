import { useState, useEffect } from 'react';
import { getDataContact } from '../../../../../../services';
import { Contact } from '../../../../../../interfaces';
import { useFetchAndLoad } from '../../../../../../hooks';
import { contactAdapter } from '../../../../../../adapters';

const useContacts = () => {
  const { callEndpoint } = useFetchAndLoad();
  const [contacts, setContacts] = useState<Contact[]>([]);

  const getData = async () => {
    try {
      const rawResponse = await callEndpoint(getDataContact());
      const sanitizedResponse = contactAdapter(rawResponse);
      setContacts(sanitizedResponse.result || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { contacts, getData };
};

export default useContacts;
