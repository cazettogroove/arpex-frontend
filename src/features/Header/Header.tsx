import React, { FC } from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from '@material-ui/core';
import { AppBar } from './Header.styled';
import { Link } from 'react-router-dom';
import { useCheckAuth } from 'features/User/User.hooks';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const Header: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { isAuthenticated } = useCheckAuth();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const renderUserInfo = () => {
    return (
      <IconButton
        onClick={handleProfileMenuOpen}
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircleIcon fontSize="large" />
      </IconButton>
    );
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';
  const renderUserInfoMenu = () => {
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
      </Menu>
    );
  };

  const renderLoginButton = () => {
    return (
      <Button component={Link} to="/login" color="inherit">
        Login
      </Button>
    );
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          <Typography variant="h6" component="div">
            Arpex
          </Typography>
        </Button>
        <Box display="flex" flex="1" justifyContent="flex-end">
          {isAuthenticated ? renderUserInfo() : renderLoginButton()}
        </Box>
      </Toolbar>
      {renderUserInfoMenu()}
    </AppBar>
  );
};
