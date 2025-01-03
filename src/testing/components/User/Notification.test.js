import { render, screen } from '@testing-library/react';
import Notifications from '../../../components/User/Notifications';

test('displays notifications', () => {
  const mockNotifications = [{ id: 1, message: 'New task assigned' }];
  
  render(<Notifications notifications={mockNotifications} />);

  // Test if the "New task assigned" message appears
  expect(screen.getByText('New task assigned')).toBeInTheDocument();
});
