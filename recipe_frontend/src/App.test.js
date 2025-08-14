import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign In button text', () => {
  render(<App />);
  const signInText = screen.getByText(/sign in/i);
  expect(signInText).toBeInTheDocument();
});
