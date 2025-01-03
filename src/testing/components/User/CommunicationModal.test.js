import { render, screen } from '@testing-library/react';
import CommunicationModal from '../../../components/User/CommunicationModal';


test('renders modal with content', () => {
  render(<CommunicationModal isOpen={true} />);

  // Check if the modal content is rendered
  expect(screen.getByText('New Communication')).toBeInTheDocument();
});