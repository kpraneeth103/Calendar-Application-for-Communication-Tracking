import { render, screen } from '@testing-library/react';
import Dashboard from '../../../components/User/Dashboard';

test('renders dashboard correctly', () => {
  render(<Dashboard />);

  // Check if the dashboard heading is rendered
  expect(screen.getByText('Company Communications')).toBeInTheDocument();
});