import React, { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useCheckAuth } from '../User.hooks';

interface Props {
  element: ReactNode;
}

export const PrivateRoute: FC<Props> = (props) => {
  const { element } = props;
  const { isAuthenticated } = useCheckAuth();

  console.log('wat', isAuthenticated);

  return isAuthenticated ? <>{element}</> : <Navigate to="/login" />;
};
