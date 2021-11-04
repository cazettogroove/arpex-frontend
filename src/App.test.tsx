import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders Arpex link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Arpex/i);
  expect(linkElement).toBeInTheDocument();
});
