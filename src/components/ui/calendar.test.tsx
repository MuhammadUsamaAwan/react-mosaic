import { fireEvent, render } from '@testing-library/react';
import { addMonths, format, subMonths } from 'date-fns';
import { describe, expect, it } from 'vitest';

import { Calendar } from '~/components/ui/calendar';

describe('Calendar', () => {
  it('should render correctly', () => {
    const wrapper = render(<Calendar />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should show current month correctly', () => {
    const wrapper = render(<Calendar />);
    const date = format(new Date(), 'MMMM yyyy');
    expect(wrapper.getByText(date)).toBeInTheDocument();
  });

  it('should go to previous month', () => {
    const wrapper = render(<Calendar />);
    const prevDate = format(subMonths(new Date(), 1), 'MMMM yyyy');
    const prevButton = wrapper.getByLabelText('Go to previous month');
    fireEvent.click(prevButton);
    expect(wrapper.getByText(prevDate)).toBeInTheDocument();
  });

  it('should go to next month', () => {
    const wrapper = render(<Calendar />);
    const nextDate = format(addMonths(new Date(), 1), 'MMMM yyyy');
    const nextButton = wrapper.getByLabelText('Go to next month');
    fireEvent.click(nextButton);
    expect(wrapper.getByText(nextDate)).toBeInTheDocument();
  });
});
