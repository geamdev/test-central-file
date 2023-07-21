import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_PUBLIC_BACKEND;

export const client = () =>
  axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
