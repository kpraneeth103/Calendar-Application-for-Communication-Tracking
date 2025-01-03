import { render,screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter from react-router-dom
import Sidebar from '../../../components/Shared/Sidebar';

test('renders sidebar items', () => {
  render(
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  );

  // Check if the sidebar items are rendered
  expect(screen.getByText('Admin')).toBeInTheDocument();
  expect(screen.getByText('User')).toBeInTheDocument();
  expect(screen.getByText('Reports')).toBeInTheDocument();
});