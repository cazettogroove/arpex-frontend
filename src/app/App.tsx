import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import { store } from './store';
import { LoginPage } from 'features/Login/LoginPage';
import { DashboardPage } from 'features/Dashboard/DashboardPage';
import { theme } from './theme';
import { Text } from 'components/Text/Text';
import { amplifyConfig } from 'config/amplify';
import { PrivateRoute } from 'features/User/components/PrivateRoute';
import { ChangePasswordPage } from 'features/ChangePassword/ChangePassword';

export const TEXT_SITE_NAME = 'Arpex';

Amplify.configure(amplifyConfig);

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Text type="H1">{TEXT_SITE_NAME}</Text>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<div />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute element={<DashboardPage />} />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
