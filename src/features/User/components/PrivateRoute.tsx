import React, { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  element: ReactNode;
}

function checkAuth() {
  return false;
}

export const PrivateRoute: FC<Props> = (props) => {
  const { element } = props;
  const isAuthenticated = checkAuth();
  return isAuthenticated ? <>{element}</> : <Navigate to="/login" />;
};
