import { RootState } from 'app/store';
import { useSelector } from 'react-redux';
import { UserState } from './User.slice';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCheckAuth = () => {
  const user: UserState = useSelector((state: RootState) => {
    return state.user;
  });
  return {
    isAuthenticated: Boolean(user.username),
  };
};
