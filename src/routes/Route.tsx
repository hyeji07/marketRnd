import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import LayoutDefault from '@layout/LayoutDefault';
import WrittenReview from '@pages/WrittenReview';
import PaymentDetails from '@pages/PaymentDetails';
import CalendarEx from '@pages/CalendarEx';

export default function AppRoute(): JSX.Element {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path='/' element={<Home />} />
        <Route path='/written_review' element={<WrittenReview />} />
        <Route path='/payment_details' element={<PaymentDetails />} />
        {/*react-datepicker 라이브러리 적용예제*/}
        <Route path='/calendar' element={<CalendarEx />} />
      </Route>
    </Routes>
  );
}
