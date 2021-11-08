import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

import { TEXT_SITE_NAME } from './App';

test('renders page', () => {
  render(<App />);
  const siteName = screen.getByText(TEXT_SITE_NAME);
  expect(siteName).toBeInTheDocument();
});
