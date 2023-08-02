import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import LayoutDefault from '@layout/LayoutDefault';
import WrittenReview from '@pages/WrittenReview';
import PaymentDetails from '@pages/PaymentDetails';
import CalendarEx from '@pages/CalendarEx';
import Beauty from '@pages/Beauty';
import Goods from '@pages/Goods';
import StGoods from '@pages/StGoods';

export default function AppRoute(): JSX.Element {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path='/' element={<Home />} />
        <Route path='/goods/:id' element={<Goods />} />

        {/* st api 적용 단일상품 */}
        <Route path='/stgoods/:id' element={<StGoods />} />

        <Route path='/beauty' element={<Beauty />} />

        <Route path='/written_review' element={<WrittenReview />} />
        <Route path='/payment_details' element={<PaymentDetails />} />
        {/*react-datepicker 라이브러리 적용예제*/}
        <Route path='/calendar' element={<CalendarEx />} />
      </Route>
    </Routes>
  );
}
