import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { LoginPage } from './LoginPage';

import { store } from 'app/store';
import { TEXT_PAGE_TITLE } from './LoginPage';

test('renders page', () => {
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
  const pageTitle = screen.getByText(TEXT_PAGE_TITLE);
  expect(pageTitle).toBeInTheDocument();
});
