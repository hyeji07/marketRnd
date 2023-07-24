import { useLocation, useNavigate } from 'react-router-dom';
import Search from './Search';
import './header.scss';
import Logo from '@assets/images/logo.svg';
import Menu from './Menu';
import { useState } from 'react';

export default function Header() {
  const pathname = useLocation().pathname.slice(1);

  const navigate = useNavigate();
  const handleClickKurlyMenu = () => {
    navigate('/');
  };
  const handleClickBeautyMenu = () => {
    navigate('/beauty');
  };

  const [cartNum, setCartNum] = useState(1);

  return (
    <div className='header-wrap'>
      <div className='inner-1050'>
        <div className='my-wrap'>
          <div className='my-lists-wrap'>
            <span className='class-mark'>일반</span>anne 님
            <span className='triangle-bottom'></span>
          </div>
          <div className='height-line'></div>
          <div className='my-customer-lists-wrap'>
            <span>고객센터</span>
            <span className='triangle-bottom'></span>
          </div>
        </div>

        <div className='header-content-wrap'>
          <div className='header-content-wrap-left'>
            <div className='logo-category-wrap'>
              <img src={Logo} alt='마켓컬리 로고' />
              <div className='category-wrap'>
                <button
                  className={
                    pathname === '' ? 'category category-active' : 'category'
                  }
                  onClick={handleClickKurlyMenu}
                >
                  마켓컬리
                </button>

                <button
                  className={
                    pathname === 'beauty'
                      ? 'category category-active category-beauty'
                      : 'category category-beauty'
                  }
                  onClick={handleClickBeautyMenu}
                >
                  뷰티컬리
                </button>
              </div>
            </div>

            <Search />
          </div>

          <div className='header-content-wrap-right'>
            <button className='header-icon-address'></button>
            <button className='header-icon-heart'></button>
            <button className='header-icon-cart'>
              {cartNum && (
                <span className='header-icon-cart-number'>{cartNum}</span>
              )}
            </button>
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
}
