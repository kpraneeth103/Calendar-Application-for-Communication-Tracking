import { render, screen } from '@testing-library/react';
import CommunicationMethodsTable from '../../../components/Admin/CommunicationMethodsTable';

test('renders CommunicationMethodsTable with data', () => {
  // Adjust mock data to match the expected prop structure
  const mockData = [{ id: 1, name: 'Email', description: 'Description', sequence: 1, mandatory: true }];
  
  render(<CommunicationMethodsTable methods={mockData} onAdd={jest.fn()} onUpdate={jest.fn()} onDelete={jest.fn()} />);
  
  // Test if the 'Email' method name is rendered in the table
  expect(screen.getByText('Email')).toBeInTheDocument();
});