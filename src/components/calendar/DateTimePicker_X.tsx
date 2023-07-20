import React from 'react';
import { useState } from 'react';
import 'moment-timezone';

import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
// import TimeSelect from './TimeSelect';

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  type: 'date' | 'date-range' | 'time' | 'datetime';
}

interface ICustomInputProps {
  value?: any;
  onClick?(): void;
}

/*  보류/사용X */

export const DatetimePicker: React.FC<Props> = ({ type }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const CustomInput: React.FC<ICustomInputProps> = ({ value, onClick }) => (
    <div className='date-picker'>
      <input
        type='text'
        className='date-picker__input date-picker_with-icon'
        onClick={onClick}
        value={value}
      />
      <Fa className='date-picker__icon' icon={faCalendarAlt} />
    </div>
  );

  const CustomHeader: React.FC<any> = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <>
      {/* <Moment format='MMMM YYYY'>{date}</Moment> */}
      <div className='navigation'>
        <button
          className='prev'
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <Fa icon={faAngleLeft} />
        </button>
        <button
          className='next'
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
          <Fa icon={faAngleRight} />
        </button>
      </div>
    </>
  );

  const singleChangeHandler = (date: Date) => setStartDate(date);

  const rangeChangeHandler = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  switch (type) {
    case 'date':
      return (
        <DatePicker
          selected={startDate}
          onChange={singleChangeHandler}
          dateFormat='MMMM d, yyyy'
          renderCustomHeader={CustomHeader}
          customInput={<CustomInput />}
        />
      );
    case 'date-range':
      return (
        <DatePicker
          selected={startDate}
          onChange={rangeChangeHandler}
          startDate={startDate}
          endDate={endDate}
          dateFormat='MMMM d, yyyy'
          renderCustomHeader={CustomHeader}
          customInput={<CustomInput />}
          selectsRange
          shouldCloseOnSelect={false}
        />
      );

    case 'datetime':
      return (
        <div className='datetime-picker'>
          <DatePicker
            selected={startDate}
            onChange={singleChangeHandler}
            dateFormat='MMMM d, yyyy'
            renderCustomHeader={CustomHeader}
            customInput={<CustomInput />}
          />
        </div>
      );
    default:
      return <span>Incorrect datetime picker type.</span>;
  }
};
