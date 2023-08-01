import Lottie from 'lottie-react';
import timerAnimationData from '../../assets/lottie/timerAnimationLottie.json';

export default function TimerAnimation({ className }: { className: string }) {
  return <Lottie animationData={timerAnimationData} className={className} />;
}
