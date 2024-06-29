import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://116.44.163.82:8090';
export const api: AxiosInstance = axios.create({ baseURL });

export const userInfoAPI = (accessToken: string) => {
  const url = '/api/v1/session-member';
  return api.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
