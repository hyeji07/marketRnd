import CalendarCommon from '@components/calendar/CalendarCommon';
import CalendarCustomFour from '@components/calendar/CalendarCustomFour';
import CalendarCustomThree from '@components/calendar/CalendarCustomThree';
import CalendarCustomTwo from '@components/calendar/CalendarCustomTwo';
// import { DatetimePicker } from '@components/calendar/DateTimePicker_X';

export default function PaymentDetails() {
  return (
    <div>
      <CalendarCommon />

      <CalendarCustomTwo />

      <p>커스텀3: 스타일 적용</p>
      <CalendarCustomThree />

      <p>커스텀4:</p>
      <div>
        <CalendarCustomFour />
      </div>

      {/* <p>보류</p> */}
      {/* <DatetimePicker type='date' /> */}
    </div>
  );
}
