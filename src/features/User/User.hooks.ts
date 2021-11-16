import React, { useEffect } from 'react';
import { checkAuth } from './User.helpers';

export const useCheckAuth = () => {


  useEffect(() => {
    async function check() {
      try {
        const result = await checkAuth();
      } catch (error) {
        console.log(error);
        
      }

    }

    check();
  }, []);
}