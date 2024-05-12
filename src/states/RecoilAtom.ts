import { LoginUserData } from '@/app/api/auth';
import { atom, selector } from 'recoil';

export const logginedUserState = atom({
  key: 'logginedUserState',
  default: null as LoginUserData | null,
});

export const isLoggedInState = selector({
  key: 'isLoggedInState',
  get: ({ get }) => {
    const userState = get(logginedUserState);
    if (!userState) {
      return false;
    }
    return true;
  },
});
