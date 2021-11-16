import { Box } from '@material-ui/core';
import { useCheckAuth } from 'features/User/User.hooks';
import { retrieveUser } from 'features/User/User.slice';
import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  header?: ReactNode;
  sidebar?: ReactNode;
  content?: ReactNode;
}

export const Layout: FC<Props> = (props) => {
  const { header, sidebar, content } = props;
  const { isAuthenticated } = useCheckAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveUser());
  }, []);

  return (
    <>
      {header}
      {isAuthenticated && sidebar}
      <Box paddingTop={8} paddingLeft={isAuthenticated ? 32 : 0}>
        {content}
      </Box>
    </>
  );
};
