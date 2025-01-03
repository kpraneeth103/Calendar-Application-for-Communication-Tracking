import { render ,screen} from '@testing-library/react';
import Calendar from '../../../components/User/Calendar';


test('renders calendar component', () => {
  render(<Calendar />);

  // Using getByRole for FullCalendar component (use the correct role if needed)
  expect(screen.getByRole('grid')).toBeInTheDocument(); // This assumes FullCalendar has a 'grid' role

  // Alternatively, you can check for specific content in the calendar
  expect(screen.getByText('Calendar View')).toBeInTheDocument(); // Check if the title exists
});