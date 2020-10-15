import React from 'react';
import { InputStyled } from './style';

const Input = ({color, ...rest}) => {
  return (
    <div>
      <InputStyled type="color" name="color" id="color" {...rest} />
    </div>
  );
};

export default Input;
