import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://116.44.163.82:8090';
export const api: AxiosInstance = axios.create({ baseURL });

export interface SignupData {
  name: string;
  email: string;
  nickname: string;
  password: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export const signupAPI = (data: SignupData) => {
  const url = '/api/v1/auth/sign-up';
  return api.post(url, data);
};

export const loginAPI = (data: LoginUserData) => {
  const url = '/api/v1/auth/login';
  return api.post(url, data);
};
