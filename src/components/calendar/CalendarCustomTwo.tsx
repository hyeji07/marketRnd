import { useState } from 'react';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

import styles from './calendarCustomTwo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

registerLocale('ko', ko); //날짜 한국어로 표시

export default function CalendarCustomTwo() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div>
      <p>커스텀2</p>
      {/* <p className={styles['date-picker']}></p> */}
      <p className={cx('date-picker')}></p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        //커스텀
        locale='ko' //한국어로 설정
        // dateFormat='yyyy.MM.dd(eee)' //eeee는 '요일'까지 표시됨
        dateFormat='yyyy.MM.dd' //eeee는 '요일'까지
        className='form-control'
        dayClassName={(d) => cx('custom-day')}
      />
    </div>
  );
}
