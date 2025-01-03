import { render, screen } from '@testing-library/react';
import Footer from '../../../components/Shared/Footer';

test('renders footer text', () => {
  render(<Footer />);

  // Update the expected text to match the actual footer text in the component
  expect(screen.getByText('© 2024 Calendar Tracker. All Rights Reserved.')).toBeInTheDocument();
});
