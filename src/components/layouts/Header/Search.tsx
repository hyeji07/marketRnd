import Input from '@components/input/Input';
import { useForm } from '@hooks/useForm';
import './search.scss';

export default function Search() {
  const { values, setValues, handleChange } = useForm({
    search: '',
  });

  return (
    <div className='search-input-wrap'>
      <Input
        type='text'
        value={values.search}
        onChange={handleChange}
        name='search'
        placeholder='검색어를 입력해주세요'
        className='header-search'
      />
      {values.search && (
        <button
          className='header-search-remove'
          onClick={() => setValues({ search: '' })}
        ></button>
      )}
      <button className='header-search-submit'></button>
    </div>
  );
}
