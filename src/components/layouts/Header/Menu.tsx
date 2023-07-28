import { useNavigate } from 'react-router-dom';

import './menu.scss';

export default function Menu() {
  const menuLists = [
    {
      title: '신상품',
      link: 'market-newproduct',
    },
    {
      title: '베스트',
      link: 'market-best',
    },
    {
      title: '알뜰쇼핑',
      link: 'market-time-sales',
    },
    {
      title: '특가/혜택',
      link: 'market-benefit',
    },
  ];

  const navigate = useNavigate();
  const handleClickMenu = (link: string) => {
    navigate(`/${link}`);
  };

  return (
    <div className='menu-wrap'>
      <div className='menu-category-wrap'>
        <span className='menu-category-icon'></span>
        카테고리
      </div>

      <ul className='menu-lists'>
        {menuLists.map((item, i) => (
          <li
            className='menu-list'
            key={i}
            onClick={() => handleClickMenu(item.link)}
          >
            {item.title}
          </li>
        ))}
      </ul>

      <div className='menu-delivery'>
        <span>샛별・택배</span> 배송안내
      </div>
    </div>
  );
}
