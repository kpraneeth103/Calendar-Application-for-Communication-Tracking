import { render, screen } from '@testing-library/react';
import Table from '../../../components/User/Table';

test('renders table with data', () => {
  const mockData = [
    {
      id: 1,
      name: "Company A",
      lastCommunications: [
        { method: "Email", date: "2025-01-01" },
        { method: "Call", date: "2024-12-31" }
      ],
      nextDue: { method: "Email", date: "2025-01-10" }
    },
    {
      id: 2,
      name: "Company B",
      lastCommunications: [], // No communications for this company
      nextDue: { method: "Call", date: "2025-01-05" }
    }
  ];
  render(<Table data={mockData} />);
  
});
