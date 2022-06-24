import { fireEvent, render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

test('Selecting the checkbox should toggle its value', () => {
  render(<Checkbox />);
  const checkbox = screen.getByTestId('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
});
