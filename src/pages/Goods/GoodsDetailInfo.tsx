import goodsItemDetailImg from '@assets/images/marketKurlyGoodsDetail.png';
import './goodsDetail.scss';

export default function GoodsDetailInfo({ item }: any) {
  return (
    <div className='goods-item-wrap'>
      <div className='goods-item-details-article'>
        <img src={item.img} alt='상세페이지' />
      </div>
      <div className='goods-item-details-article'></div>
    </div>
  );
}
