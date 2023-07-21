import { loadAbort } from '../utilities';
import { client } from '../config/axios';
import { Resolver } from '../interfaces';

export const getDataContact = () => {
  const controller = loadAbort();
  return {
    controller,
    call: client().get<Resolver<string>>('/Contact', {
      signal: controller.signal,
    }),
  };
};

export const contactCreatedService = (data: {
  name: string;
  email: string;
  phone: string;
  biography: string;
}) => {
  const controller = loadAbort();
  return {
    controller,
    call: client().post<Resolver<string>>('/Contact/Created', data, {
      signal: controller.signal,
    }),
  };
};
