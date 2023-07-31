import dayjs from 'dayjs';
import useCountDownTimer from '@hooks/useCountDownTimer';
import './timeArticle.scss';
import TimerAnimation from '@components/lottie/TimerAnimation';

export default function TimeArticle() {
  //<기한설정 (언제까지 타이머설정할지)>
  //명시적으로 작성하는 경우
  //const targetTime = '2023-07-29 00:00:00';

  //현재날짜의 +1일에 00:00:00을 설정한 경우
  // const targetTime = dayjs().add(1, 'day').startOf('day');

  //현재날짜의 +1일에 오전11:00:00을 설정한 경우
  const targetDay = dayjs().add(1, 'day');
  const targetTime = targetDay
    .set('hour', 11)
    .set('minute', 0)
    .set('second', 0);

  const { remainingTime } = useCountDownTimer(targetTime);

  return (
    <div className='main-article-time-event-wrap flex-space-between-center'>
      <div className='main-article-timer-wrap '>
        <h3 className='main-article-bold-title'>매일 오전 11시 OPEN !</h3>
        <p className='main-article-gray-title'>24시간 한정 일일특가</p>
        <p className='main-article-time-text'>
          <TimerAnimation className='timerAnimation' />
          {remainingTime}
        </p>
        <p>망설이면 늦어요!</p>
      </div>
      <div>d</div>
    </div>
  );
}
