import React from 'react';
import '@testing-library/jest-dom';
import { Star } from './Star';
import { render, screen } from '@testing-library/react';

test('renders a star', async () => {
  render(<Star />);
  expect(screen.getByTestId('star')).toHaveAttribute('id', 'star');
  // screen.debug();
});

test('renders an h1', () => {
  render(<Star />);
  const h1 = screen.getByText(/great star/i);
  expect(h1).toContainHTML('Great Star');
});

test('if we pass true should change color to red', () => {
  render(<Star selected={true} />);
  expect(screen.getByTestId('star')).toHaveAttribute('color', 'red');
});

test('if we pass false should change color to grey', () => {
  render(<Star selected={false} />);
  expect(screen.getByTestId('star')).toHaveAttribute('color', 'grey');
});
