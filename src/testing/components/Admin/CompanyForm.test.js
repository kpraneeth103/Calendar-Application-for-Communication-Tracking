import { render, fireEvent } from '@testing-library/react';
import CompanyForm from '../../../components/Admin/CompanyForm';

test('submits form correctly', () => {
  const mockSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<CompanyForm onAddCompany={mockSubmit} />);

  // Fill out the form
  fireEvent.change(getByLabelText('Company Name'), { target: { value: 'Test Company' } });
  fireEvent.change(getByLabelText('Location'), { target: { value: 'Test Location' } });
  fireEvent.change(getByLabelText('Communication Period'), { target: { value: '2025' } });

  // Click the submit button (looking for 'Add Company' instead of 'Submit')
  fireEvent.click(getByText('Add Company'));

  // Ensure the form was submitted with the correct values
  expect(mockSubmit).toHaveBeenCalledWith({ companyName: 'Test Company', location: 'Test Location', period: '2025' });
});