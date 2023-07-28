import useCountDownTimer from '@hooks/useCountDownTimer';

export default function TimeArticle() {
  const targetTime = '2023-07-29 00:00:00';
  const { remainingTime } = useCountDownTimer(targetTime);

  return (
    <div>
      <div>
        <h3>매일 오전 11시 OPEN !</h3>
        <p>24시간 한정 일일특가</p>
        <p>{remainingTime}</p>
        <p>망설이면 늦어요!</p>
      </div>
    </div>
  );
}
