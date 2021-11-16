import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import { store } from './store';
import { LoginPage } from 'features/Login/LoginPage';
import { DashboardPage } from 'features/Dashboard/DashboardPage';
import { theme } from './theme';
import { amplifyConfig } from 'config/amplify';
import { PrivateRoute } from 'features/User/components/PrivateRoute';
import { ChangePasswordPage } from 'features/ChangePassword/ChangePassword';
import { Header } from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Layout } from './components/Layout/Layout';

export const TEXT_SITE_NAME = 'Arpex';

Amplify.configure(amplifyConfig);

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout
            header={<Header />}
            sidebar={<Sidebar />}
            content={
              <Routes>
                <Route path="/" element={<div />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/change-password"
                  element={<ChangePasswordPage />}
                />
                <Route
                  path="/dashboard"
                  element={<PrivateRoute element={<DashboardPage />} />}
                />
              </Routes>
            }
          />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
