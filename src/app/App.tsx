import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { LoginPage } from 'pages/Login/LoginPage';
import { DashboardPage } from 'pages/Dashboard/DashboardPage';
import { theme } from './theme';
import { Text } from 'components/Text/Text';

const TEXT_SITE_NAME = 'Arpex';

export const App: FC = () => {
  return (
    <>
      <Text type="H1">{TEXT_SITE_NAME}</Text>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
