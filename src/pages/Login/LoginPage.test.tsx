import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginPage } from './LoginPage';

import { TEXT_PAGE_TITLE } from './LoginPage';

test('renders page', () => {
  render(<LoginPage />);
  const pageTitle = screen.getByText(TEXT_PAGE_TITLE);
  expect(pageTitle).toBeInTheDocument();
});
