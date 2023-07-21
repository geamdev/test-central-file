import { AxiosResponse } from 'axios';

import { Contact, Resolver } from '../interfaces';

export const contactAdapter = (
  response: AxiosResponse<Resolver<Contact[]>>,
): Resolver<Contact[]> => ({
  statusCode: response.data.statusCode,
  message: response.data.message,
  result: response.data,
});
