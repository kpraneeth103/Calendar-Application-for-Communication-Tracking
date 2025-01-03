import { render, fireEvent } from '@testing-library/react';
import MethodForm from '../../../components/Admin/MethodForm';

test('handles method form submission', () => {
  // Mock the submission function
  const mockSubmit = jest.fn();

  // Render the component with the mockSubmit function passed as the onAddMethod prop
  const { getByLabelText, getByRole } = render(<MethodForm onAddMethod={mockSubmit} />);

  // Simulate entering values in the form fields
  fireEvent.change(getByLabelText('Method Name'), { target: { value: 'Test Method' } });
  fireEvent.change(getByLabelText('Description'), { target: { value: 'Test Description' } });
  fireEvent.change(getByLabelText('Sequence'), { target: { value: '1' } });

  // Click the submit button using getByRole with a more specific query
  fireEvent.click(getByRole('button', { name: /add method/i }));

  // Check if the mockSubmit was called with the expected arguments
  expect(mockSubmit).toHaveBeenCalledWith({
    name: 'Test Method',
    description: 'Test Description',
    sequence: 1,
    mandatory: false, // Assuming the checkbox is unchecked by default
  });
});