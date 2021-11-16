import { useEffect, useState } from 'react';
import { checkAuth } from './User.helpers';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCheckAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    async function check() {
      try {
        const result = await checkAuth();
        setIsAuthenticated(!!result);
      } catch (error) {
        setIsAuthenticated(false);
      }
    }
    check();
  }, []);
  return isAuthenticated;
};
