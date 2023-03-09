import { render, screen } from '@testing-library/react';
import Bookings from '../Components/Bookings';

test('Renders Table Booking Form', () => {
  render(<Bookings />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});
