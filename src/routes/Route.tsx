import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import LayoutDefault from '@layout/LayoutDefault';
import WrittenReview from '@pages/WrittenReview';

export default function AppRoute(): JSX.Element {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path='/' element={<Home />} />
        <Route path='/written_review' element={<WrittenReview />} />
      </Route>
    </Routes>
  );
}
