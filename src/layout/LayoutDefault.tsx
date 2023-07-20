import { Outlet } from 'react-router-dom';
import './layoutDefault.scss';
import Header from '@components/layouts/Header';

export default function LayoutDefault() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
