import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://116.44.163.82:8090';
export const api: AxiosInstance = axios.create({ baseURL });

interface PostData {
  title: string;
  content: string;
  targetPrice: number;
  recommended: string;
}

export const postReportApi = (data: PostData, accessToken: string) => {
  const url = '/api/v1/reports';
  return api.post(url, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getReportAPI = (
  accessToken: string,
  pageNo: number,
  pageSize: number,
) => {
  const url = '/api/v1/reports';
  return api.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken} `,
    },
    params: {
      pageNo,
      pageSize,
    },
  });
};
