import React from "react";

import { ButtonProps } from "../../types/types";

import * as S from "./style";

const Button = ({ children, disabled, onClick }: ButtonProps) => {
  return (
    <S.ButtonStyled disabled={disabled} onClick={onClick}>
      {children}
    </S.ButtonStyled>
  );
};

export default Button;
