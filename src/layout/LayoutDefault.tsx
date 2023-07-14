import { Outlet } from 'react-router-dom';
import './layoutDefault.scss';

export default function LayoutDefault() {
  return (
    <>
      <Outlet />
    </>
  );
}
