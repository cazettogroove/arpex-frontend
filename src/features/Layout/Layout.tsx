import { Box } from '@material-ui/core';
import { useCheckAuth } from 'features/User/User.hooks';
import React, { FC, ReactNode } from 'react';

interface Props {
  header?: ReactNode;
  sidebar?: ReactNode;
  content?: ReactNode;
}

export const Layout: FC<Props> = (props) => {
  const { header, sidebar, content } = props;
  const isAuthenticated = useCheckAuth();

  return (
    <>
      {header}
      {isAuthenticated && sidebar}
      <Box paddingTop={12}>{content}</Box>
    </>
  );
};
