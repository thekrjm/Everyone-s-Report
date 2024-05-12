import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://192.168.219.113:8090';
export const api: AxiosInstance = axios.create({ baseURL });

export const userInfoAPI = (accessToken: string) => {
  const url = '/api/v1/session-member';
  return api.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
