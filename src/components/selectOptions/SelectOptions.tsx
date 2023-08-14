import { useEffect, useState } from 'react';
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

  const [amount, setAmount] = useState(1);

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
  ///////////////////////
  /* 하다맘  이어서계속하기 8/11 */
  const handleAmountMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const handleAmountPlus = () => {
    if (amount > 0) {
    }
    setAmount(amount);
    console.log(amount);
  };

  const handleSelectOption = () => {};
  /*
  console.log(subOptionObject.name);

  useEffect(() => {}, [amount]); */

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

      <div className='select-option-amount-wrap'>
        <p>
          {subOptionObject.name} <span>{subOptionObject.salePrice}</span>
        </p>
        <div>
          <p
            className='select-option-amount select-option-minus'
            onChange={handleAmountMinus}
          ></p>
          <input type='text' value={amount} onChange={handleSelectOption} />
          <p
            className='select-option-amount select-option-plus'
            onChange={handleAmountPlus}
          ></p>
        </div>
      </div>
    </div>
  );
}
