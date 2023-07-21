import { useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

import { AxiosCall } from '../../services';

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState<boolean>(false);
  let controller = new AbortController();

  const callEndpoint = async (
    axiosCall: AxiosCall<any>,
  ): Promise<AxiosError | any> => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    let result = {} as AxiosResponse<any>;
    try {
      result = await axiosCall.call;
    } catch (err: any) {
      setLoading(false);
      throw err;
    }

    setLoading(false);
    return result;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, callEndpoint };
};

export default useFetchAndLoad;
