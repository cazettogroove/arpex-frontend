import { useEffect, useState } from 'react';
import { checkAuth } from './User.helpers';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCheckAuth = () => {
  const [user, setUser] = useState<unknown>();
  useEffect(() => {
    async function check() {
      try {
        const result = await checkAuth();
        setUser(result);
      } catch (error) {
        setUser(null);
      }
    }
    check();
  }, []);
  return {
    isAuthenticated: !!user,
    user,
  };
};
