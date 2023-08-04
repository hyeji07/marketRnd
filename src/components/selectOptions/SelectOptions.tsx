import { useState } from 'react';
import './selectOptions.scss';
import formatNumberCommas from '@helpers/formatNumberCommas';

export default function SelectOptions({ option }: any) {
  const [requiredOption, setRequiredOption] = useState('필수선택');
  const [viewRequiredOption, setViewRequiredOption] = useState(false);
  const [selectOption, setSelectOption] = useState(0);

  const [subOptionObject, setSubOptionObject] = useState({
    id: '',
    name: '',
    img: '',
    salePrice: '',
  });
  const [subOption, setSubOption] = useState('추가선택');
  const [viewSubOption, setViewSubOption] = useState(false);

  const handleRequiredOptions = () => {
    setViewRequiredOption(!viewRequiredOption);
    setViewSubOption(false);
  };
  const handleRequiredOption = (option: any, i: number) => {
    setRequiredOption(option);
    setViewRequiredOption(!viewRequiredOption);
    setSelectOption(i);
    setViewSubOption(true);
    setSubOption('추가선택');
  };

  const handleSubOptions = () => {
    setViewSubOption(!viewSubOption);
  };
  const handleSubOption = (option: any) => {
    setSubOptionObject(option);
    setSubOption(option.name);
    setViewSubOption(false);
  };

  console.log(subOptionObject.name);

  return (
    <div className='select-option-wrap'>
      <ul className='options-wrap'>
        <li className='option-input' onClick={handleRequiredOptions}>
          {requiredOption}
        </li>
        <ul
          className={
            viewRequiredOption
              ? 'view-required-option option-common'
              : 'required-option'
          }
        >
          {option.map((item: any, i: any) => (
            <li onClick={() => handleRequiredOption(item.name, i)} key={i}>
              {item.name}
              <span className='option-common-price'>
                {formatNumberCommas(Number(item.salePrice))}원
              </span>
            </li>
          ))}
        </ul>
      </ul>
      <ul className='options-wrap'>
        <li className='option-input' onClick={handleSubOptions}>
          {subOption}
        </li>

        {option[selectOption].subOption.list?.length > 0 && (
          <ul
            className={
              viewSubOption ? 'view-sub-option option-common' : 'sub-option'
            }
          >
            {option[selectOption].subOption.list.map((option: any, i: any) => (
              <li onClick={() => handleSubOption(option)} key={i}>
                {option.name}
                <span className='option-common-price'>
                  {formatNumberCommas(Number(option.salePrice))}원
                </span>
              </li>
            ))}
          </ul>
        )}
      </ul>

      <div>
        <p>
          {subOptionObject.name} <span>{subOptionObject.salePrice}</span>
        </p>
        <div>
          <p>-</p>
          <input type='text' value={1} />
          <p>+</p>
        </div>
      </div>
    </div>
  );
}
