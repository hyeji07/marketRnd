import MainCarousel from '@components/carousel/MainCarousel';
import MainArticle from './MainArticle';

function Home() {
  return (
    <div className='home-article-wrap'>
      <MainCarousel />
      <div className='inner-1050'>
        <MainArticle />
      </div>
    </div>
  );
}

export default Home;
