import { render, screen, waitFor } from '@testing-library/react';
import ReportsPage from '../../pages/ReportsPage';

jest.mock('@react-pdf/renderer', () => ({
  PDFDownloadLink: () => <div>Mock PDF Download Link</div>,
  Document: () => <div>Mock Document</div>,
  Page: () => <div>Mock Page</div>,
  Text: () => <div>Mock Text</div>,
  View: () => <div>Mock View</div>,
  StyleSheet: { create: jest.fn().mockReturnValue({ page: { padding: 20 } }) },
}));

describe('ReportsPage Component', () => {
  it('renders correctly', async () => {
    render(<ReportsPage />);
    await waitFor(() => screen.getByText(/Communication Frequency/i));
    expect(screen.getByText(/Communication Frequency/i)).toBeInTheDocument();
    // Add other checks for the page's elements
  });
});
