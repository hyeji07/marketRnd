import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './mainCarousel.scss';

export default function MainCarousel() {
  const items = [
    {
      url: 'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/7d07785b-56ee-4d53-b499-5e60cf26b6c6.jpg',
    },
    {
      url: 'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f2458b16-5f26-4fd3-be7e-5592484612af.jpg',
    },
    {
      url: 'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/b983c92d-0bec-472a-9b52-911f3fd9374f.jpg',
    },
    {
      url: 'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/37cb618f-179a-4497-b04a-1e3b72b47298.jpg',
    },
    {
      url: 'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/e688e39f-8a6d-442d-848b-731bb20e988f.jpg',
    },
    {
      url: 'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/16d20266-b93a-4147-9ac7-59e07898a4c7.jpg',
    },
  ];

  return (
    <div className='main-banner'>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, EffectFade, Autoplay, Pagination]}
        className='mySwiper'
        loop={true}
        speed={1000}
        navigation={true}
        pagination={{
          type: 'fraction', //페이지표시
        }}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div
                style={{
                  background: `url(${item.url}) no-repeat center/cover `,
                  width: '100%',
                  height: '100%',
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
