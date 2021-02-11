import React from "react";

import { InputProps } from "../../types/types";

import * as S from "./style";

const Input = ({ color, ...rest }: InputProps) => {
  return <S.InputStyled type="color" name="color" id="color" {...rest} />;
};

export default Input;
