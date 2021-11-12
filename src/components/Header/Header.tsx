import React, { FC } from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <Box marginBottom={4}>
      <AppBar position="static">
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
    </Box>
  );
};
