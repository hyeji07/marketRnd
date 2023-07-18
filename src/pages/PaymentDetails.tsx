import CalendarCommon from '@components/calendar/CalendarCommon';
import CalendarCustomTwo from '@components/calendar/CalendarCustomTwo';
import { DatetimePicker } from '@components/calendar/DateTimePicker';

export default function PaymentDetails() {
  return (
    <div>
      <CalendarCommon />

      <p>진행중</p>
      <CalendarCustomTwo />

      <p>보류</p>
      <DatetimePicker type='date' />
    </div>
  );
}
