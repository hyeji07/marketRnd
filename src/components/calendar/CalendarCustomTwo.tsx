import { useState } from 'react';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

import styles from './calendarCustomTwo.module.scss';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';

const cx = classNames.bind(styles);

registerLocale('ko', ko); //날짜 한국어로 표시

export default function CalendarCustomTwo() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const date = dayjs(startDate).format('YYYY-MM-DD');
  // console.log(date);

  return (
    <div className={cx('custom-wrap')}>
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
        className='form-control' //input클래스
        dayClassName={(d) => cx('custom-day')} //달력일자클래스/무조건 함수로 넘겨야함
        /* peekNextMonth :다음달 1주까지 달력표시*/

        //월,년도 선택 옵션
        showMonthDropdown
        showYearDropdown
        dropdownMode='select'
        yearItemNumber={9}
      />
    </div>
  );
}
