import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselInterface } from '@interfaces/components/CarouselInterface';
import './multipleCarousel.scss';
import ProductItem from '@components/product/ProductItem';

export default function MultipleCarousel({
  items,
}: CarouselInterface.SwiperItemsInterface) {
  //swiper:Slides per group skip

  return (
    <div className='article-multiple-swiper'>
      <Swiper
        modules={[Navigation, Pagination]}
        className='mySwiper'
        centeredSlides={false}
        grabCursor={true}
        slidesPerView={4} //처음 보여지는개수
        slidesPerGroup={4} //보여지는 개수 묶음
        navigation={{
          prevEl: '#multipleSwiperPrev',
          nextEl: '#multipleSwiperNext',
        }} //버튼 커스텀
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <ProductItem item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button id='multipleSwiperPrev'></button>
      <button id='multipleSwiperNext'></button>
    </div>
  );
}
