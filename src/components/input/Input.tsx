import React, { forwardRef } from 'react';

import { FormInterface } from '@interfaces/components/FormInterface';

export default forwardRef(function Input(
  {
    type,
    value,
    onChange,
    name,
    placeholder,
    className,
  }: FormInterface.InputInterface,
  ref?: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
      className={className}
      autoComplete='off'
    />
  );
});
