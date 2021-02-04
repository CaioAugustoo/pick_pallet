import React from "react";
import { InputStyled } from "./style";

const Input = ({ color, ...rest }) => {
  return <InputStyled type="color" name="color" id="color" {...rest} />;
};

export default Input;
