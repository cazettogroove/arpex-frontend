import React, { FC } from 'react';
import { Box, Toolbar, Typography, Button } from '@material-ui/core';
import { AppBar } from './Header.styled';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          <Typography variant="h6" component="div">
            Arpex
          </Typography>
        </Button>

        <Box display="flex" flex="1" justifyContent="flex-end">
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
