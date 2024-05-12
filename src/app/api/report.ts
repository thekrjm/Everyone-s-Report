import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://192.168.219.113:8090';
export const api: AxiosInstance = axios.create({ baseURL });

export const getReportAPI = (
  token: string,
  pageNo: number,
  pageSize: number,
) => {
  const url = '/api/v1/reports';
  return api.get(url, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
    params: {
      pageNo,
      pageSize,
    },
  });
};
