import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, {target: {value: 'Matrix'}})
  fireEvent.click(button)

  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible()

});

