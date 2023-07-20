import { forwardRef, useEffect, useState } from 'react';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { getMonth, getYear, getDate } from 'date-fns';

import dayjs from 'dayjs';

import './calendarCustomThree.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

registerLocale('ko', ko); //날짜 한국어로 표시

const CustomInput = forwardRef((props: any, ref) => {
  return (
    <div className='calendar-input-wrap'>
      <input {...props} ref={ref} type='text' />
      <CalendarMonthIcon />
    </div>
  );
});

export default function CalendarCustomThree() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const _ = require('lodash');

  registerLocale('ko', ko); //날짜 한국어로 표시

  // 연도 선택 select box에 보여질 데이터 : range(시작 연도, 끝 연도, 연도 간격)
  // const years = _.range(1990, getYear(new Date()) + 1, 1);
  const years = _.range(getYear(new Date()) - 10, getYear(new Date()) + 1, 1);

  // 월 선택 select box에 보여질 데이터
  const months = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  // const currentMonth = getMonth(new Date());

  //선택날짜
  const date = dayjs(startDate).format('YYYY-MM-DD');
  // console.log(date);

  return (
    <div className='custom-wrap3'>
      <DatePicker
        //Input 커스텀
        customInput={<CustomInput />}
        //header 커스텀
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <ArrowBackIosIcon />
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
              className='selectbox'
            >
              {years.map((option: string) => (
                <option key={option} value={option}>
                  {option}년
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
              className='selectbox'
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}월
                </option>
              ))}

              {/* 이렇게 하면 범위에 따라 나타나지만, 2023년에서 3월선택후 2013년 3월가면 select에서 7월부터 시작되도록 범위정했지만 3월로 인식되어짐 /사용 X
                {getYear(date) === years[0]
                ? months.slice(currentMonth, 12).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))
                : months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))} */}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dayClassName={(d) => 'custom-day'}
        dateFormat='yyyy.MM.dd'
        disabledKeyboardNavigation //다른달에도 해당일자에 색표시되는거 제거
        locale='ko' //한국어로 설정
        //최소(minDate),최대날짜(maxDate) 범위 지정(바꿔도 됨)
        //minDate : '최소 시작 날짜'를 적용해야 <이전버튼눌러도 안넘어가짐(select안에있는 년도랑 다를수있으니 범위 한정 짓기)
        // minDate={new Date(`01-01-${getYear(new Date()) - 10}`)} //01-01-2013(월/일/현재년도에서-10) 기준으로 해놓음
        minDate={
          new Date(
            `${getMonth(new Date()) + 1}-${getDate(new Date())}-${
              getYear(new Date()) - 10
            }`
          )
        } //현재 월, 현재 일, 지정 년도(현재에서 -10년전)/ex: 현재날짜가 07.19.2023이면 07.19.2013년으로 해놓음
        maxDate={new Date()} //일단 현재날짜까지로 최대날짜 적용시킴
      />
    </div>
  );
}
