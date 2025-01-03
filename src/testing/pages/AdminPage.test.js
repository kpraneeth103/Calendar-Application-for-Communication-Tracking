import { render,screen } from '@testing-library/react';
import AdminPage from '../../pages/AdminPage';

test('renders admin page', () => {
  render(<AdminPage />);
  // Corrected to match the text 'Admin Dashboard' that is actually in the component
  expect(screen.getByText('Admin Dashboard')).toBeInTheDocument();
});