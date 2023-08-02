import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GoodsInfo from './GoodsInfo';
import './goods.scss';

export default function Goods() {
  const { id } = useParams();

  const items = [
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1644455895992l0.jpg',
      title: '[그림의빵] 저당 크림빵 3종 (택1)',
      percent: 10,
      price: 4800,
      discountPrice: 4320,
      review: 507,
      marker: '주말특가',
      //추가
      delivery: '새벽배송',
      subTitle: '흑임자 크림빵 신규! 달콤한 크림이 가득',
      seller: '컬리',
      packaging: '냉동 (종이포장)',
      unit: '1개',
      weight: '옵션별 상이',
      origin: '상품설명/상세정보 참조',
      allergy:
        '* 우유 크림빵 \n- 밀, 대두, 아황산류, 알류(계란), 우유 함유 \n* 초코 크림빵 \n- 밀, 대두, 아황산류, 알류(계란), 우유 함유 \n* 흑임자 크림빵 \n- 밀, 대두, 아황산류, 알류(계란), 우유 함유 \n- 새우, 돼지고기, 견과류, 땅콩 혼입가능',
      sellByDate: '수령일 포함 최소 120일 남은 제품을 보내 드립니다',
    },
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/16468780291l0.jpg',
      title: '[베베스트] 처음먹는 콩콩 두부과자 2종',
      percent: 10,
      price: 3460,
      discountPrice: 3090,
      review: 20,
      marker: '증정이벤트',
    },
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1657848457948l0.jpg',
      title: '[정성식품] 백명란젓',
      percent: 17,
      price: 10900,
      discountPrice: 8940,
      review: 999,
    },
  ];

  const [item, setItem] = useState(items[0] || {});

  useEffect(() => {
    /* const doGetOne = async () => {
    
    };

    doGetOne(); */

    if (id) {
      const idNum = Number(id) - 1;
      setItem(items[idNum]);
    }
  }, [id]);

  return (
    <div className='goods-wrap inner-1050'>
      <div className='goods-main-wrap'>
        <GoodsInfo item={item} />
      </div>
    </div>
  );
}
