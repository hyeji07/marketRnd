import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import calculatePercent from '@helpers/calculatePercent';
import { CarouselInterface } from '@interfaces/components/CarouselInterface';
import './productItem.scss';

export default function ProductItem({
  item,
  className,
}: {
  item: CarouselInterface.SwiperItemInterface;
  className?: string;
}) {
  return (
    <div className={`product-wrap ${className}`}>
      <div
        className='product-img'
        style={{
          backgroundImage: `url(${item.url})`,
        }}
      >
        {/* 주말특가 같은 마커표시 */}
        {item.marker && <span className='product-marker'>{item.marker}</span>}
        <button className='product-cart'></button>

        {/* 상품이벤트시 타이머종료,soldout시 블라인드처리 */}
        <div className='product-img-blind-box product-img-blind-box-timerout'>
          <p className='product-img-blind-box-text'>
            판매 시간이 종료되었습니다.
          </p>
        </div>
        <div className='product-img-blind-box product-img-blind-box-soldout'>
          <p className='product-img-blind-box-text'>
            <span>Sold Out</span> 다음 일일특가를 기대하세요!
          </p>
        </div>
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
              {/* 숫자 ,붙이기 */}
              {item.discountPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </p>
            <p className='product-price-dimmed'>
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </p>
          </div>
        ) : (
          <p className='product-price'>
            {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </p>
        )}
        {item.review && item.review !== 0 ? (
          <div className='product-review'>
            <SmsOutlinedIcon className='product-review-icon' />
            후기
            <span className='product-review-number'>
              {item.review > 9999
                ? '9,999+'
                : item.review.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
