import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration'; //dayjs 내 플러그인 import

dayjs.extend(duration);

//매개변수로 기한을 받아와서 현재시간과의 차이를 구해 남은시간을 계산
export default function useCountDownTimer(targetTime: Dayjs) {
  const [remainingTime, setRemaingTime] = useState('');

  useEffect(() => {
    const calculateRemainingTime = () => {
      const currentTime = dayjs(); //현재시간
      // const targetDate = dayjs(targetTime); //전달받는 기한 날짜(명시적으로 작성하는 경우)
      const targetDate = targetTime; //전달받는 기한 날짜
      const duration = dayjs.duration(targetDate.diff(currentTime)); //diff:차이구하기/duration:차이구한것을 객체로 반환해줌

      //만약 남은시간(asMilliseconds밀리초로 바꿈)이 0보다 크면 실행
      if (duration.asMilliseconds() > 0) {
        const days = String(duration.days()).padStart(2, '0'); //padStart(목표문자열길이,모자라면채워지는값)
        const hours = String(duration.hours()).padStart(2, '0');
        const minutes = String(duration.minutes()).padStart(2, '0');
        const seconds = String(duration.seconds()).padStart(2, '0');

        //setRemaingTime(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
        setRemaingTime(`${hours} : ${minutes} : ${seconds}`);
      } else {
        setRemaingTime('TIME OUT'); //시간경과시
      }
    };

    //타이머 실행때에만 setInterval되도록 적용/return되면 clearInterval되어 끝나도록 설정
    if (remainingTime !== 'TIME OUT') {
      const intervalId = setInterval(calculateRemainingTime, 1000); //1초마다 불러오기
      return () => clearInterval(intervalId);
    }
    return;
  }, [targetTime, remainingTime]);

  return {
    remainingTime,
  };
}
