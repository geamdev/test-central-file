import { loadAbort } from '../utilities';
import { client } from '../config/axios';
import { Resolver } from '../interfaces';

export const getDataUser = () => {
  const controller = loadAbort();
  return {
    controller,
    call: client().get<Resolver<string>>('/UserData', {
      signal: controller.signal,
    }),
  };
};

export const userLoginService = (data: {
  email: string;
  password: string;
}) => {
  const controller = loadAbort();
  return {
    controller,
    call: client().put<Resolver<string>>('/UserContact/Login', data, {
      signal: controller.signal,
    }),
  };
};

export const userCreatedService = (data: {
  name: string;
  email: string;
  password: string;
  idProfile: string;
}) => {
  const controller = loadAbort();
  return {
    controller,
    call: client().post<Resolver<string>>('/UserData/Created', data, {
      signal: controller.signal,
    }),
  };
};

