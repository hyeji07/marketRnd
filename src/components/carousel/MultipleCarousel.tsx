import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { CarouselInterface } from '@interfaces/components/CarouselInterface';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import './multipleCarousel.scss';
import calculatePercent from './../../helpers/calculatePercent';

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
              <div className='product-wrap'>
                <div
                  className='product-img'
                  style={{
                    backgroundImage: `url(${item.url})`,
                  }}
                >
                  {/* 주말특가 같은 마커표시 */}
                  {item.marker && (
                    <span className='product-marker'>{item.marker}</span>
                  )}
                  <button className='product-cart'></button>
                </div>
                <div className='product-info'>
                  <h4 className='product-name'>{item.title}</h4>

                  {item.percent && item.discountPrice ? (
                    <div>
                      <p className='product-discount-price'>
                        {/* <span className='product-percent'>{item.percent}%</span> */}
                        <span className='product-percent'>
                          {calculatePercent(item.price, item.discountPrice)}%
                        </span>
                        {item.discountPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        원
                      </p>
                      <p className='product-price-dimmed'>
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        원
                      </p>
                    </div>
                  ) : (
                    <p className='product-price'>
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      원
                    </p>
                  )}
                  {item.review && item.review !== 0 ? (
                    <div className='product-review'>
                      <SmsOutlinedIcon className='product-review-icon' />
                      후기
                      <span className='product-review-number'>
                        {item.review > 9999
                          ? '9,999+'
                          : item.review
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button id='multipleSwiperPrev'></button>
      <button id='multipleSwiperNext'></button>
    </div>
  );
}
