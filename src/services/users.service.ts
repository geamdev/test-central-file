import { loadAbort } from '../utilities';
import { client } from '../config/axios';
import { Resolver, User } from '../interfaces';
import { useSelector } from 'react-redux';

export const getDataUser = () => {
  const controller = loadAbort();
  return {
    controller,
    call: client().get<Resolver<string>>('/UserData', {
      signal: controller.signal,
    }),
  };
};

export const userLoginService = (data: { email: string; password: string }) => {
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

export const userUpdateService = (data: {
  name: string;
  email: string;
  password: string;
  idProfile: string;
}) => {
  const userData = useSelector((state: { user: User }) => state.user);
  const controller = loadAbort();
  return {
    controller,
    call: client().put<Resolver<string>>(
      `/UserData/Update/${userData.id}`,
      data,
      {
        signal: controller.signal,
      },
    ),
  };
};
