import './mainArticleBanner.scss';

export default function MainArticleBanner({ imgSrc }: { imgSrc: string }) {
  return (
    <div className='main-article-banner'>
      <img src={imgSrc} alt='main banner' />
    </div>
  );
}
