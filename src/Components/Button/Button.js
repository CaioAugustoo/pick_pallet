import React from 'react';
import { ButtonStyled } from './style';

const Button = ({buttonText, disabled, ...rest}) => {
  return (
    <ButtonStyled disabled={disabled} {...rest}> 
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;
