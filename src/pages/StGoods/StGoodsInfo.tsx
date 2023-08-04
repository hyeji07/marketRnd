import calculatePercent from '@helpers/calculatePercent';
import { ProductInterface } from '@interfaces/components/ProductInterface';
import './goodsInfo.scss';
import formatNumberCommas from '@helpers/formatNumberCommas'; //숫자 , 붙여주는 함수

export default function StGoodsInfo({ item }: { item: any }) {
  console.log(item.body);

  return (
    <div className='goods-info-wrap'>
      <div
        className='goods-info-img'
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      ></div>
      <div className='goods-info-desc'>
        <div className='goods-info-desc-main'>
          <p className='goods-info-desc-main-delivery'>일반상품</p>
          <h2 className='goods-info-desc-main-title'>{item.name}</h2>
          <h3 className='goods-info-desc-main-subtitle'>{item.description}</h3>

          {/* 할인가와 정상가가 다를 경우 %도 출력// 같을 경우 정상가만 출력 */}
          {item.min_sale_price !== item.max_sale_price ? (
            <div className='goods-info-desc-main-price'>
              <p className='product-discount-price product-price-common'>
                <span className='product-percent'>
                  {calculatePercent(item.max_sale_price, item.min_sale_price)}%
                </span>
                {formatNumberCommas(item.min_sale_price)}원
              </p>
              <p className='product-price-dimmed'>
                {formatNumberCommas(item.max_sale_price)}원
              </p>
            </div>
          ) : (
            <p className='product-price product-price-common'>
              {formatNumberCommas(item.max_sale_price)}원
            </p>
          )}
        </div>

        <div className='goods-info-desc-sub'>
          <dl>
            <dt>배송사</dt>
            <dd>
              <span>{item.delivery_type}</span>
            </dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd>
              <span>{formatNumberCommas(item.delivery_price)}원</span>
            </dd>
          </dl>
          <dl>
            <dt>공급자 ID</dt>
            <dd>{item.supplier_id}</dd>
          </dl>
          <dl>
            <dt>판매처 ID</dt>
            <dd>{item.mall_id}</dd>
          </dl>

          <dl>
            <dt>최저가(할인가격)</dt>
            <dd>{formatNumberCommas(item.min_sale_price)}원</dd>
          </dl>
          <dl>
            <dt>최고가(정상가격)</dt>
            <dd>{formatNumberCommas(item.max_sale_price)}원</dd>
          </dl>
          <dl>
            <dt>포장타입</dt>
            <dd>
              <p>{item.packaging}</p>
              <p>택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p>
            </dd>
          </dl>
          {/*   <dl>
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
          </dl> */}
        </div>
      </div>
    </div>
  );
}
