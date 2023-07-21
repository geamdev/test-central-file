import { AxiosResponse } from 'axios';

import { User, Resolver } from '../interfaces';

export const userAdapter = (
  response: AxiosResponse<Resolver<User[]>>,
): Resolver<User[]> => ({
  statusCode: response.data.statusCode,
  message: response.data.message,
  result: response.data,
});
