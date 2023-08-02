import calculatePercent from '@helpers/calculatePercent';
import { ProductInterface } from '@interfaces/components/ProductInterface';
import './goodsInfo.scss';

export default function GoodsInfo({
  item,
}: {
  item: ProductInterface.ItemInterface;
}) {
  return (
    <div className='goods-info-wrap'>
      <div
        className='goods-info-img'
        style={{
          backgroundImage: `url(${item.url})`,
        }}
      ></div>
      <div className='goods-info-desc'>
        <div className='goods-info-desc-main'>
          <p className='goods-info-desc-main-delivery'>{item.delivery}</p>
          <h2 className='goods-info-desc-main-title'>{item.title}</h2>
          <h3 className='goods-info-desc-main-subtitle'>{item.subTitle}</h3>

          {item.percent && item.discountPrice ? (
            <div className='goods-info-desc-main-price'>
              <p className='product-discount-price product-price-common'>
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
            <p className='product-price product-price-common'>
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </p>
          )}
        </div>

        <div className='goods-info-desc-sub'>
          <dl>
            <dt>배송</dt>
            {item.delivery === '새벽배송' && (
              <dd>
                <p>{item.delivery}</p>
                <p className='goods-info-desc-sub-dimmed'>
                  23시 전 주문 시 내일 아침 7시 전 도착 \n (대구·부산·울산
                  샛별배송 운영시간 별도 확인)
                </p>
              </dd>
            )}
          </dl>
          <dl>
            <dt>판매자</dt>
            <dd>{item.seller}</dd>
          </dl>
          <dl>
            <dt>포장타입</dt>
            <dd>
              <p>{item.packaging}</p>
              <p className='goods-info-desc-sub-dimmed'>
                택배배송은 에코 포장이 스티로폼으로 대체됩니다.
              </p>
            </dd>
          </dl>
          <dl>
            <dt>판매단위</dt>
            <dd>{item.unit}</dd>
          </dl>
          {item.weight && (
            <dl>
              <dt>중량/용량</dt>
              <dd>{item.weight}</dd>
            </dl>
          )}
          <dl>
            <dt>원산지</dt>
            <dd>{item.origin}</dd>
          </dl>
          {item.allergy && (
            <dl>
              <dt>알레르기정보</dt>
              <dd>
                {item.allergy.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </dd>
            </dl>
          )}
          {item.sellByDate && (
            <dl>
              <dt>유통기한</dt>
              <dd>{item.sellByDate}</dd>
            </dl>
          )}
        </div>
      </div>
    </div>
  );
}
