import MultipleCarousel from '@components/carousel/MultipleCarousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import mainArticleDat from '@data/mainArticleData.json';
//위보류

/*
//쿠키 테스트
import { useCookies } from 'react-cookie';
*/

import './mainArticle.scss';
import MainArticleBanner from './MainArticleBanner';
import TimeArticleContainer from './TimeArticleContainer';

export default function MainArticle() {
  const items = [
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1644455895992l0.jpg',
      title: '[그림의빵] 저당 크림빵 3종 (택1)',
      percent: 10,
      price: 4800,
      discountPrice: 4320,
      review: 507,
      marker: '주말특가',
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
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1589246421253l0.jpg',
      title: '[아리얼] 스트레스 릴리빙 퓨어풀 클렌징 티슈 80매',
      percent: 52,
      price: 8900,
      discountPrice: 4200,
      review: 10000,
    },
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1657615562394l0.jpg',
      title: '[비비고] 썰은배추김치 더 풍부한맛 500g (단지형)',
      percent: 21,
      price: 8900,
      discountPrice: 7000,
      review: 123,
    },
    {
      url: 'https://product-image.kurly.com/product/image/4234828e-1513-47ba-b807-d83611d38f1c.jpeg',
      title: '[광화문 미진] 메밀국수 (2인분)',
      percent: 9,
      price: 9900,
      discountPrice: 8950,
      review: 4,
    },
    {
      url: 'https://product-image.kurly.com/product/image/ee06868d-0676-4d43-b5a3-e3594a31a213.jpg',
      title: '[더마비]데일리 모이스처 바디로션 400ml',
      percent: 32,
      price: 17500,
      discountPrice: 11900,
      review: 11111,
    },
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1643075146292l0.jpg',
      title: '[오리온] 꼬물탱 2믹스 (12g x 50봉지)',
      percent: 7,
      price: 8900,
      discountPrice: 8270,
      review: 958,
    },
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1637923042758l0.jpeg',
      title: '[태우한우] 1+ 한우 양지 국거리용 200g 2종 (냉장)',
      percent: 25,
      price: 16800,
      discountPrice: 12600,
      review: 1,
    },
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1655430572271l0.jpg',
      title: '[전주 베테랑] 쫄면',
      percent: 20,
      price: 5500,
      discountPrice: 4400,
      review: 0,
    },
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1554257909332l0.jpg',
      title: '[나탈리스] 프리미엄 착즙 자몽 주스 1L',
      percent: 12,
      price: 10900,
      discountPrice: 9500,
      review: 0,
    },
    {
      url: 'https://img-cf.kurly.com/shop/data/goods/1658233780660l0.jpg',
      title: '[씨알로] 뽀로로 바나나 쌀링 450g',
      percent: 25,
      price: 8900,
      discountPrice: 6650,
      review: 11111,
    },
  ];

  /*
  //쿠키 테스트
  const [cookies, setCookie, removeCookie] = useCookies(['testToken']);

  const handleClickSet = () => {
    setCookie('testToken', '11', {
      path: '/',
      maxAge: 365 * 24 * 60 * 60, // 1년 유지
      domain: '.hyejii.com',
    });
  };
  const handleClickRemove = () => {
    removeCookie('testToken', { path: '/' });
  };
  const handleClickGet = () => {
    console.log(cookies.testToken);
  };
 */
  return (
    <div className='main-articles-wrap'>
      <div className='main-article-wrap'>
        <h3 className='main-article-title'>이 상품 어때요?</h3>
        <MultipleCarousel items={items} />

        {/* 쿠키테스트 */}
        {/*   <button onClick={handleClickSet}>저장</button>
        <button onClick={handleClickRemove}>삭제</button>
        <button onClick={handleClickGet}>Get</button> */}
      </div>
      <MainArticleBanner imgSrc='https://product-image.kurly.com/banner/random-band/pc/img/d449a6ae-e7d9-4b4d-ba06-23d1af9a8f33.jpg' />

      <TimeArticleContainer />

      <MainArticleBanner imgSrc='https://product-image.kurly.com/banner/random-band/pc/img/4494856a-cefc-42bc-a17b-043e90f37334.jpg' />

      <div className='main-article-wrap'>
        <h3 className='main-article-title'>
          놓치면 후회할 가격 <ArrowForwardIosIcon className='icon-more' />
        </h3>
        <MultipleCarousel items={items} />
      </div>
    </div>
  );
}