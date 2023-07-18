import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './calendarCommon.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function CalendarCommon() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div>
      {/* <p className={styles['date-picker']}></p> */}
      <p className={cx('date-picker')}></p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        //커스텀
      />
    </div>
  );
}
