import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGoodsItem } from '@services/stGoodsItemService';
import StGoodsInfo from './StGoodsInfo';

export default function StGoods() {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    const doGetOne = async () => {
      const body = {
        goods_id: id,
      };

      const data = await getGoodsItem(body);

      // console.log(data.data.body);
      setItem(data.data.body);
    };

    doGetOne();
  }, [id]);

  return (
    <div className='goods-wrap inner-1050'>
      <div className='goods-main-wrap'>
        <StGoodsInfo item={item} />
      </div>
    </div>
  );
}
