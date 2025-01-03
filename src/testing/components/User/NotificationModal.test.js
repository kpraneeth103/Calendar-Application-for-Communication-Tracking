import { render,screen } from '@testing-library/react';
import NotificationModal from '../../../components/User/NotificationModal';

test('renders notification modal', () => {
  render(<NotificationModal isOpen={true} />);
  expect(screen.getByText('Notifications')).toBeInTheDocument();
});
