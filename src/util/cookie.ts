import Cookie from 'js-cookie';

export const getCookie = (cookie: string) => {
  return Cookie.get(cookie);
};
