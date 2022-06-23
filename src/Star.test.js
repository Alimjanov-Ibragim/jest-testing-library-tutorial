import React from 'react';
import { createRoot } from 'react-dom/client';
import { Star } from './Star';

test('renders a star', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<Star />);
  expect(container.hasAttribute('id')).toHaveAttribute('id', 'star');
});
