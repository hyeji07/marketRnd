import dayjs from 'dayjs';
import useCountDownTimer from '@hooks/useCountDownTimer';
import './timeArticle.scss';
import TimerAnimation from '@components/lottie/TimerAnimation';
import ProductItem from '@components/product/ProductItem';

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

  //타이머설정
  const { remainingTime } = useCountDownTimer(targetTime);

  const itemsData = [
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1644455895992l0.jpg',
      title: '[그림의빵] 저당 크림빵 3종 (택1)',
      percent: 10,
      price: 4800,
      discountPrice: 4320,
      review: 507,
      marker: '일일특가',
      soldout: true,
    },
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/16468780291l0.jpg',
      title: '[베베스트] 처음먹는 콩콩 두부과자 2종',
      percent: 10,
      price: 3460,
      discountPrice: 3090,
      review: 20,
      marker: '일일특가',
      soldout: false,
    },
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1657848457948l0.jpg',
      title: '[정성식품] 백명란젓',
      percent: 17,
      price: 10900,
      discountPrice: 8940,
      review: 999,
      soldout: false,
    },
  ];
  const items = itemsData.slice(0, 2);

  return (
    <div className='main-article-time-event-wrap flex-space-between-start'>
      <div className='main-article-timer-wrap '>
        <h3 className='main-article-bold-title'>매일 오전 11시 OPEN !</h3>
        <p className='main-article-gray-title'>24시간 한정 일일특가</p>
        <div className='main-article-time-text'>
          <TimerAnimation className='timerAnimation' />
          {remainingTime}
        </div>
        <p className='main-article-time-ps'>망설이면 늦어요!</p>
      </div>

      <div className='products-wrap'>
        {items.map((item, idx) => {
          return (
            <ProductItem
              item={item}
              //타임아웃일경우는 해당 타임아웃 블라인드,아닐 경우 솔드아웃시 해당 솔드아웃 블라인드가 뜨도록 클래스네임 설정함
              className={
                remainingTime === 'TIME OUT'
                  ? 'product-wrap-timeout'
                  : item.soldout === true
                  ? `product-wrap-soldout`
                  : undefined
              }
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}
