import { Box } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import { checkAuth } from 'features/User/User.helpers';
import React, { FC, ReactNode, useEffect, useState } from 'react';

interface Props {
  header?: ReactNode;
  sidebar?: ReactNode;
  content?: ReactNode;
}

export const Layout: FC<Props> = (props) => {
  const { header, sidebar, content } = props;
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    checkAuth()
      .then((result: boolean) => {
        console.log(result);

        setIsAuthenticated(result);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {header}
      {isAuthenticated && sidebar}
      <Box paddingTop={12}>{content}</Box>
    </>
  );
};
