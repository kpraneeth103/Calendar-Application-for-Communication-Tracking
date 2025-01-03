import { render, screen } from '@testing-library/react';
import CompanyTable from '../../../components/Admin/CompanyTable';

test('renders company table with data', () => {
  const mockCompanies = [
    { id: 1, name: 'Company A', location: 'Location A', linkedinProfile: 'https://linkedin.com/company-a', emails: ['email1@example.com'], phoneNumbers: ['123-456-7890'] },
    { id: 2, name: 'Company B', location: 'Location B', linkedinProfile: 'https://linkedin.com/company-b', emails: ['email2@example.com'], phoneNumbers: ['987-654-3210'] },
  ];

  render(<CompanyTable companies={mockCompanies} onUpdate={() => {}} onAdd={() => {}} onDelete={() => {}} />);
  
  // Check if table rows are rendered
  mockCompanies.forEach(company => {
    expect(screen.getByText(company.name)).toBeInTheDocument();
    expect(screen.getByText(company.location)).toBeInTheDocument();
  });
});