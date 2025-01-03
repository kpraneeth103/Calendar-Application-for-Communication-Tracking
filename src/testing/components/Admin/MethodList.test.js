import { render, screen } from '@testing-library/react';
import MethodList from '../../../components/Admin/MethodList';
test('renders method list items', () => {
  // Update mockData to be an array of objects with the expected properties
  const mockData = [
    { name: 'Email', description: 'Email method', sequence: 1, mandatory: false },
    { name: 'Call', description: 'Call method', sequence: 2, mandatory: true },
  ];

  render(<MethodList methods={mockData} />);

  // Check if the text for each method is rendered correctly
  expect(screen.getByText('Email')).toBeInTheDocument();
  expect(screen.getByText('Call')).toBeInTheDocument();
});